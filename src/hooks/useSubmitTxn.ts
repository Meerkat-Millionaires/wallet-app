import { HotspotType } from '@helium/onboarding'
import { chunks } from '@helium/spl-utils'
import { PublicKey, Transaction } from '@solana/web3.js'
import { useAccountStorage } from '@storage/AccountStorageProvider'
import i18n from '@utils/i18n'
import * as solUtils from '@utils/solanaUtils'
import BN from 'bn.js'
import { useCallback } from 'react'
import { getH3Location } from '@utils/h3'
import { useSolana } from '../solana/SolanaProvider'
import { useWalletSign } from '../solana/WalletSignProvider'
import { WalletStandardMessageTypes } from '../solana/walletSignBottomSheetTypes'
import {
  claimAllRewards,
  claimRewards,
  makeCollectablePayment,
  makePayment,
  sendAnchorTxn,
  sendDelegateDataCredits,
  sendMintDataCredits,
  sendTreasurySwap,
  sendUpdateIotInfo,
  sendUpdateMobileInfo,
} from '../store/slices/solanaSlice'
import { useAppDispatch } from '../store/store'
import {
  Collectable,
  CompressedNFT,
  HotspotWithPendingRewards,
} from '../types/solana'

export default () => {
  const { currentAccount } = useAccountStorage()
  const { cluster, anchorProvider, solanaOnboarding } = useSolana()
  const { t } = i18n
  const { walletSignBottomSheetRef } = useWalletSign()

  const dispatch = useAppDispatch()

  const submitPayment = useCallback(
    async (
      payments: {
        payee: string
        balanceAmount: BN
        max?: boolean
      }[],
      mint: PublicKey,
    ) => {
      if (
        !currentAccount?.solanaAddress ||
        !anchorProvider ||
        !walletSignBottomSheetRef
      ) {
        throw new Error(t('errors.account'))
      }

      const txns = await Promise.all(
        chunks(payments, 5).map((p) => {
          return solUtils.transferToken(
            anchorProvider,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            currentAccount.solanaAddress!,
            currentAccount.address,
            p,
            mint.toBase58(),
          )
        }),
      )

      const decision = await walletSignBottomSheetRef.show({
        type: WalletStandardMessageTypes.signTransaction,
        url: '',
        additionalMessage: t('transactions.signPaymentTxn'),
        serializedTxs: txns.map((tx) => ({
          tx: tx.serialize({
            requireAllSignatures: false,
          }),
        })),
      })

      if (!decision) {
        throw new Error('User rejected transaction')
      }

      dispatch(
        makePayment({
          paymentTxns: txns,
          account: currentAccount,
          cluster,
          anchorProvider,
        }),
      )
    },
    [
      currentAccount,
      dispatch,
      t,
      anchorProvider,
      cluster,
      walletSignBottomSheetRef,
    ],
  )

  const submitCollectable = useCallback(
    async (collectable: CompressedNFT | Collectable, payee: string) => {
      if (
        !currentAccount?.solanaAddress ||
        !anchorProvider ||
        !walletSignBottomSheetRef
      ) {
        throw new Error(t('errors.account'))
      }

      const compressedNFT = collectable as CompressedNFT
      const nft = collectable as Collectable

      const transferTxn = compressedNFT?.compression?.compressed
        ? await solUtils.transferCompressedCollectable(
            anchorProvider,
            currentAccount.solanaAddress,
            currentAccount.address,
            compressedNFT,
            payee,
          )
        : await solUtils.transferCollectable(
            anchorProvider,
            currentAccount.solanaAddress,
            currentAccount.address,
            nft,
            payee,
          )

      const serializedTx = transferTxn.serialize({
        requireAllSignatures: false,
      })

      const decision = await walletSignBottomSheetRef.show({
        type: WalletStandardMessageTypes.signTransaction,
        url: '',
        additionalMessage: t('transactions.signTransferCollectableTxn'),
        serializedTxs: [{ tx: Buffer.from(serializedTx) }],
      })

      if (!decision) {
        throw new Error('User rejected transaction')
      }

      dispatch(
        makeCollectablePayment({
          account: currentAccount,
          transferTxn,
          cluster,
          anchorProvider,
        }),
      )
    },
    [
      cluster,
      currentAccount,
      dispatch,
      t,
      anchorProvider,
      walletSignBottomSheetRef,
    ],
  )

  const submitTreasurySwap = useCallback(
    async (fromMint: PublicKey, amount: number, recipient: PublicKey) => {
      if (!currentAccount || !anchorProvider || !walletSignBottomSheetRef) {
        throw new Error(t('errors.account'))
      }

      const { connection } = anchorProvider
      const recipientExists = Boolean(
        await connection.getAccountInfo(recipient),
      )

      const swapTxn = await solUtils.createTreasurySwapTxn(
        amount,
        fromMint,
        anchorProvider,
        recipient,
      )

      const serializedTx = swapTxn.serialize({
        requireAllSignatures: false,
      })

      const decision = await walletSignBottomSheetRef.show({
        type: WalletStandardMessageTypes.signTransaction,
        url: '',
        warning: recipientExists ? '' : t('transactions.recipientNonExistent'),
        additionalMessage: t('transactions.signSwapTxn'),
        serializedTxs: [{ tx: Buffer.from(serializedTx) }],
      })

      if (!decision) {
        throw new Error('User rejected transaction')
      }

      dispatch(
        sendTreasurySwap({
          anchorProvider,
          cluster,
          swapTxn,
        }),
      )
    },
    [
      anchorProvider,
      cluster,
      currentAccount,
      dispatch,
      t,
      walletSignBottomSheetRef,
    ],
  )

  const submitAnchorTxn = useCallback(
    async (txn: Transaction) => {
      if (!anchorProvider || !walletSignBottomSheetRef) {
        throw new Error(t('errors.account'))
      }

      const serializedTx = txn.serialize({
        requireAllSignatures: false,
      })

      const decision = await walletSignBottomSheetRef.show({
        type: WalletStandardMessageTypes.signTransaction,
        url: '',
        additionalMessage: t('transactions.signGenericTxn'),
        serializedTxs: [{ tx: Buffer.from(serializedTx) }],
      })

      if (!decision) {
        throw new Error('User rejected transaction')
      }

      dispatch(
        sendAnchorTxn({
          txn,
          anchorProvider,
          cluster,
        }),
      )
    },
    [anchorProvider, cluster, dispatch, t, walletSignBottomSheetRef],
  )

  const submitClaimRewards = useCallback(
    async (txns: Transaction[]) => {
      if (!anchorProvider) {
        throw new Error(t('errors.account'))
      }

      if (!currentAccount) {
        throw new Error(t('errors.account'))
      }

      if (!walletSignBottomSheetRef) {
        throw new Error('No wallet sign bottom sheet ref')
      }

      const serializedTxs = txns.map((txn) =>
        txn.serialize({
          requireAllSignatures: false,
        }),
      )

      const decision = await walletSignBottomSheetRef.show({
        type: WalletStandardMessageTypes.signTransaction,
        url: '',
        additionalMessage: t('transactions.signClaimRewardsTxn'),
        serializedTxs: serializedTxs.map((tx) => ({ tx: Buffer.from(tx) })),
      })

      if (!decision) {
        throw new Error('User rejected transaction')
      }

      dispatch(
        claimRewards({
          account: currentAccount,
          txns,
          anchorProvider,
          cluster,
        }),
      )
    },
    [
      anchorProvider,
      cluster,
      currentAccount,
      dispatch,
      t,
      walletSignBottomSheetRef,
    ],
  )

  const submitClaimAllRewards = useCallback(
    async (
      lazyDistributors: PublicKey[],
      hotspots: HotspotWithPendingRewards[],
    ) => {
      if (!anchorProvider || !currentAccount || !walletSignBottomSheetRef) {
        throw new Error(t('errors.account'))
      }

      if (!currentAccount) {
        throw new Error(t('errors.account'))
      }

      dispatch(
        claimAllRewards({
          account: currentAccount,
          lazyDistributors,
          hotspots,
          anchorProvider,
          cluster,
        }),
      )
    },
    [
      anchorProvider,
      cluster,
      currentAccount,
      dispatch,
      t,
      walletSignBottomSheetRef,
    ],
  )

  const submitLedger = useCallback(async () => {
    throw new Error('Solana not yet supported for ledger devices')
  }, [])

  const submitMintDataCredits = useCallback(
    async ({ dcAmount, recipient }: { dcAmount: BN; recipient: PublicKey }) => {
      if (!currentAccount || !anchorProvider || !walletSignBottomSheetRef) {
        throw new Error(t('errors.account'))
      }

      const { connection } = anchorProvider
      const recipientExists = Boolean(
        await connection.getAccountInfo(recipient),
      )

      const swapTxn = await solUtils.mintDataCredits({
        anchorProvider,
        dcAmount,
        recipient,
      })

      const serializedTx = swapTxn.serialize({
        requireAllSignatures: false,
      })

      const decision = await walletSignBottomSheetRef.show({
        type: WalletStandardMessageTypes.signTransaction,
        url: '',
        warning: recipientExists ? '' : t('transactions.recipientNonExistent'),
        additionalMessage: t('transactions.signMintDataCreditsTxn'),
        serializedTxs: [{ tx: Buffer.from(serializedTx) }],
      })

      if (!decision) {
        throw new Error('User rejected transaction')
      }

      await dispatch(
        sendMintDataCredits({
          anchorProvider,
          cluster,
          swapTxn,
        }),
      )
    },
    [
      anchorProvider,
      cluster,
      currentAccount,
      dispatch,
      t,
      walletSignBottomSheetRef,
    ],
  )

  const submitDelegateDataCredits = useCallback(
    async (
      delegateAddress: string,
      amount: number,
      mint: PublicKey,
      memo?: string,
    ) => {
      if (!currentAccount || !anchorProvider || !walletSignBottomSheetRef) {
        throw new Error(t('errors.account'))
      }

      const delegateDCTxn = await solUtils.delegateDataCredits(
        anchorProvider,
        delegateAddress,
        amount,
        mint,
        memo,
      )

      const serializedTx = delegateDCTxn.serialize({
        requireAllSignatures: false,
      })

      const decision = await walletSignBottomSheetRef.show({
        type: WalletStandardMessageTypes.signTransaction,
        url: '',
        additionalMessage: t('transactions.signDelegateDCTxn'),
        serializedTxs: [{ tx: Buffer.from(serializedTx) }],
      })

      if (!decision) {
        throw new Error('User rejected transaction')
      }

      await dispatch(
        sendDelegateDataCredits({
          anchorProvider,
          cluster,
          delegateDCTxn,
        }),
      )
    },
    [
      anchorProvider,
      cluster,
      currentAccount,
      dispatch,
      t,
      walletSignBottomSheetRef,
    ],
  )

  const submitUpdateEntityInfo = useCallback(
    async ({
      type,
      entityKey,
      lat,
      lng,
      elevation,
      decimalGain,
    }: {
      type: HotspotType
      entityKey: string
      lat: number
      lng: number
      elevation?: string
      decimalGain?: string
    }) => {
      if (!anchorProvider || !currentAccount || !walletSignBottomSheetRef) {
        throw new Error(t('errors.account'))
      }

      const location = getH3Location(lat, lng)

      const assertData = await solanaOnboarding?.getAssertData({
        gateway: entityKey,
        elevation: elevation ? parseFloat(elevation) : undefined,
        decimalGain: decimalGain ? parseFloat(decimalGain) : undefined,
        location,
        hotspotTypes: [type],
      })

      if (!assertData?.solanaTransactions.length) {
        throw new Error('Failed to get assert data')
      }

      // If there's more than one txn, the first item is the burn txn. We only want to check for insufficient funds on it
      const includesBurn = assertData.solanaTransactions.length > 1

      const serializedTxs = assertData.solanaTransactions.map((txn, index) => ({
        tx: Buffer.from(txn, 'base64'),
        ignoreInsufficientFunds: includesBurn && index !== 0,
      }))

      const decision = await walletSignBottomSheetRef.show({
        type: WalletStandardMessageTypes.signTransaction,
        url: '',
        additionalMessage: t('transactions.signAssertLocationTxn'),
        serializedTxs,
      })

      if (!decision) {
        throw new Error('User rejected transaction')
      }

      const txns = serializedTxs.map((tx) => Transaction.from(tx.tx))

      if (type === 'IOT') {
        await dispatch(
          sendUpdateIotInfo({
            account: currentAccount,
            anchorProvider,
            cluster,
            txns,
          }),
        )
      }

      if (type === 'MOBILE') {
        await dispatch(
          sendUpdateMobileInfo({
            account: currentAccount,
            anchorProvider,
            cluster,
            txns,
          }),
        )
      }
    },
    [
      anchorProvider,
      cluster,
      currentAccount,
      dispatch,
      solanaOnboarding,
      t,
      walletSignBottomSheetRef,
    ],
  )

  return {
    submitPayment,
    submitCollectable,
    submitTreasurySwap,
    submitAnchorTxn,
    submitClaimRewards,
    submitClaimAllRewards,
    submitLedger,
    submitMintDataCredits,
    submitDelegateDataCredits,
    submitUpdateEntityInfo,
  }
}
