export default {
  sentinel: {
    in_progress: {
      title: 'Helium Blockchain Stopped',
      body: 'Helium is transitioning to Solana.',
    },
    complete: {
      title: 'App update needed',
      body: 'Helium has transitioned to Solana. Update your app to manage your account on Solana. No other action required.',
    },
  },
  accountAssign: {
    AccountNamePlaceholder: 'Wallet Name',
    setDefault: 'Set as Default',
    title: 'Name this wallet',
  },
  errors: {
    accountNotSelected: 'There must be a wallet selected to submit a txn',
  },
  accountImport: {
    accountLimit:
      'You have reached the wallet limit.\nTo add another wallet, remove a wallet account and try again.',
    accountLimitLedger:
      'You have reached the wallet limit.\nTo add another wallet, uncheck a wallet and try again.',
    alert: {
      body: "This seed phrase doesn't correspond to a Helium wallet",
      title: 'Error',
    },
    cli: {
      alert: {
        body: 'Invalid Password',
        title: 'Password entered is invalid. Please try again.',
      },
      import: {
        body: 'Generate a password-secured QR code in <codeHighlight>helium-wallet-rs</codeHighlight> by typing <codeHighlight>export</codeHighlight>',
        buttonText: 'Scan QR Code',
        title: 'Import CLI',
      },
      password: {
        body: 'Enter the password used to encrypt the CLI Wallet to complete import.',
        buttonText: 'Decrypt and Import',
        title: 'Decrypting Wallet...',
      },
    },
    cliImport: 'CLI',
    complete: {
      subtitle: 'This will just take a moment.',
      title: 'Recovering Wallet...',
    },
    confirm: {
      next: 'Submit Seed Phrase',
      subtitle:
        'Here are the {{totalWords}} words you’ve entered. Tap on any of them if you need to edit.',
      title: 'Please confirm your seed phrase',
    },
    pickKeyType: 'Pick Security Key Type:',
    recoveryPhrase: 'Secret Phrase',
    keyImport: 'Private Key',
    subTitle:
      'To import your existing Helium wallet, enter its <havelockBlue>12</havelockBlue> or <jazzberryJam>24</jazzberryJam> word security key.',
    title: 'Import\nWallet',
    wordEntry: {
      changeWordAmount: 'I have a {{totalWords}}-word recovery phrase',
      placeholder: '{{ordinal}} word',
      title: "Enter your\nwallet's 12 or 24\nsecurity words.",
      word: 'Word {{ordinal}}',
    },
    privateKey: {
      title: 'Import Private Key',
      paste: 'Copy and paste your private key.',
      inputPlaceholder: 'Your private key...',
      error: 'Invalid Private Key',
      errorPassword: 'Invalid Password',
      exists:
        'The wallet you\'re importing already exists as "{{alias}}". No further action is required.',
      body: 'You are importing a private key with the following public key.',
      action: 'Import Wallet',
      passwordError: 'You must enter a password to decrypt your private key',
      passwordPlaceholder: 'Enter Password',
    },
  },
  accountSetup: {
    confirm: {
      forgot: 'I forgot my words',
      subtitle: 'Which word below was your',
      subtitleOrdinal: 'What was\nWord {{ordinal}}?',
      title: 'Please confirm your words',
    },
    confirmPin: {
      subtitle: 'Re-enter your PIN',
      title: 'Repeat PIN',
    },
    createButtonTitle: 'Create a Wallet',
    createImport: {
      create: 'Create a new Wallet',
      helperText:
        'Coming from Helium App? Use the\nsame 12 words to import a Wallet.',
      import: 'Import a Wallet',
      importPrivateKey: 'Import a Private Key',
      ledger: 'Pair with Ledger',
      title: 'What would\nyou like to do?',
    },
    createPin: {
      subtitle: 'Let’s secure your wallet with a PIN Code.',
      title: 'Set PIN Code',
    },
    passphrase: {
      next: 'I have written these down',
      subtitle1:
        'These words represent your private key. Write them down and never share with anyone.',
      subtitle2: 'No one can recover these words',
      title: 'Keep these\nwords safe',
    },
    subtitle1: 'Every new wallet is accessed via 24 secure words - your ‘key’.',
    subtitle2:
      'Please ensure these are written down, kept safe, and never shared.',
    title: 'Create New\nWallet',
  },
  airdropScreen: {
    title: 'Token Faucet',
    subtitle: 'Airdrop tokens to test your wallet.',
    airdrop: 'Airdrop',
    airdropTicker: 'Airdrop {{ticker}}',
    error: 'Airdrop failed. Please try again later.',
  },
  accountsScreen: {
    activity: 'Activity',
    allFilterFooter:
      "You've reached the end of your activity.\nSelect a different filter to view more.",
    filter: 'Filter',
    filterTransactions: 'Filter Transactions',
    filterTypes: {
      all: 'All Activity',
      in: 'Transactions in',
      out: 'Transactions out',
      delegate: 'Delegated',
      mint: 'Received',
    },
    hideFilters: 'Hide Filters',
    myTransactions: 'My Transactions',
    showFilters: 'Show Filters',
    title: 'My {{ticker}}',
    tokens: 'Tokens',
    chooseCurrency: 'Choose Currency',
    tokenBalance: '{{amount}} <secondaryText>{{ticker}}</secondaryText>',
    delegatedBalance: '{{amount}} Delegated',
    receivedBalance: '{{amount}} Received',
  },
  solanaMigrationScreen: {
    migrationComplete: "You've successfully migrated your tokens!",
    migrationComplete2: 'Navigate back to your wallet',
    error: 'Migration failed. Please try again later.',
    disableSolana: 'Disable Solana Preview',
    retry: 'Retry',
    migrating: 'Migrating your wallet to Solana',
    migratingBody: 'Please wait while we move your wallet over to Solana!',
    migrateLater: 'Migrate Later',
    done: 'Return to Home',
  },
  collectablesScreen: {
    title: 'Collectables',
    metadata: 'Metadata',
    transfer: 'Transfer Hotspot',
    transferComplete: 'Hotspot Transferred!',
    returnToCollectables: 'Return to Collectables',
    transferFee: '<b>Fee</b> <secondaryText> {{ amount }} SOL </secondaryText>',
    transferingNftTitle: 'Transferring NFT...',
    transferActions: 'Transfer Actions',
    transferTo: 'Transfer to',
    transferError: 'Transfer failed. Please try again later.',
    transferCollectable: 'Transfer Collectable',
    transferingNftBody:
      'You can exit this screen while you wait. We’ll update your collection momentarily.',
    rewardsError: 'Reward redemption failed. Please try again later.',
    claimingRewards: 'Claiming your Rewards...',
    claimingRewardsBody:
      'You can exit this screen while you wait. We’ll update your Wallet momentarily.',
    claimComplete: 'Rewards Claimed!',
    claimCompleteBody: 'Your tokens have been added to your wallet.',
    claimError: 'Claim failed. Please try again later.',
    transferCollectableAlertTitle:
      'Are you sure you will like to transfer your collectable?',
    transferCollectableAlertBody: 'This action is irreversible.',
    collectables: {
      noTraitType: 'No trait type',
      noTraitValue: 'No trait value',
      noDescription: 'No description',
      description: 'Description',
      properties: 'Properties',
    },
    nfts: {
      title: 'NFTs',
      nftDetialTitle: 'NFT Detail',
    },
    hotspots: {
      title: 'Hotspots',
      hotspotDetailTitle: 'Hotspot Detail',
      pendingRewardsTitle: 'Pending Rewards',
      claimRewards: 'Claim Rewards',
      manage: 'Manage',
      hotspotActions: 'Hotspot Actions',
      pendingRewards: '{{ amount }} {{ ticker }}',
      claimAllRewards: 'Claim all Rewards',
      hotspotClaimMessage:
        'Since your last claim, \nyour Hotspot has earned...',
      hotspotsClaimMessage:
        'Since your last claim, \nyour Hotspots have earned...',
      addToAccount: 'Add to Account',
      addAllToAccount: 'Add all to account',
      hotspotCount: '{{count}} Hotspot',
      hotspotCount_one: '{{count}} Hotspot',
      hotspotCount_other: '{{count}} Hotspots',
      hotspotCount_plural: '{{count}} Hotspots',
      chooseAmountOfHotspots: 'Choose amount of hotspots to show per page',
      filter: 'Filter',
      currentDisplayedRewards:
        'The rewards that are currently displayed as pending are only for the hotspots shown. Scroll to load more or click the filter to show more hotspots per page.',
      showAllHotspotsWarning:
        'Warning: Load times may be affected when showing all hotspots per page.',
      twenty: '20',
      fifty: '50',
      thousand: '1000',
      copyEccCompact: 'Copy Hotspot Key',
      assertLocation: 'Assert Location',
      antennaSetup: 'Antenna Setup',
    },
  },
  activityScreen: {
    title: 'My Activity',
    transactionSuccessful: 'Transaction Successful',
    transactionFailed: 'Transaction Failed',
    viewOnExplorer: 'View on Explorer',
    activityDetails: 'Activity Details',
    myAccount: 'My Account',
    compressedNFTDescription: 'Minted {{ count }} {{ symbol }}(s).',
    enrichedTransactionTypes: {
      UNKNOWN: 'App Interaction',
      NFT_BID: 'NFT Bid',
      NFT_BID_CANCELLED: 'NFT Bid Cancelled',
      NFT_LISTING: 'NFT Listing',
      NFT_CANCEL_LISTING: 'NFT Listing Canceled',
      NFT_SALE: 'NFT Sale',
      NFT_MINT: 'NFT Minted',
      NFT_AUCTION_CREATED: 'NFT Auction Created',
      NFT_AUCTION_UPDATED: 'NFT Auction Updated',
      NFT_AUCTION_CANCELLED: 'NFT Auction Cancelled',
      NFT_PARTICIPATION_REWARD: 'NFT Participation Reward',
      NFT_MINT_REJECTED: 'NFT Mint Rejected',
      CREATE_STORE: 'Store Created',
      WHITELIST_CREATOR: 'Whitelist Creator',
      ADD_TO_WHITELIST: 'Add to Whitelist',
      REMOVE_FROM_WHITELIST: 'Remove from Whitelist',
      AUCTION_MANAGER_CLAIM_BID: 'Auction Manager Claimed Bid',
      EMPTY_PAYMENT_ACCOUNT: 'Empty Payment Account',
      UPDATE_PRIMARY_SALE_METADATA: 'Primary Sale Metadata Updated',
      ADD_TOKEN_TO_VAULT: 'Token Added to Vault',
      ACTIVATE_VAULT: 'Vault Activated',
      INIT_VAULT: 'Vault Initialized',
      INIT_BANK: 'Initialized Bank',
      INIT_STAKE: 'Initialized Stake',
      MERGE_STAKE: 'Stake Merged',
      SPLIT_STAKE: 'Stake Split',
      SET_BANK_FLAGS: 'Set Bank Flags',
      SET_VAULT_LOCK: 'Set Vault Lock',
      UPDATE_VAULT_OWNER: 'Vault Owner Updated',
      UPDATE_BANK_MANAGER: 'Bank Manager Updated',
      RECORD_RARITY_POINTS: 'Record Rarity Points',
      ADD_RARITIES_TO_BANK: 'Add Rarities to Bank',
      INIT_FARM: 'Farm Initialized',
      INIT_FARMER: 'Farmer Initialized',
      REFRESH_FARMER: 'Farmer Refreshed',
      UPDATE_FARM: 'Farm Updated',
      AUTHORIZE_FUNDER: 'Funder Authorized',
      DEAUTHORIZE_FUNDER: 'Funder Deauthorized',
      FUND_REWARD: 'Reward Funded',
      CANCEL_REWARD: 'Reward Canceled',
      LOCK_REWARD: 'Reward Locked',
      PAYOUT: 'Payout',
      VALIDATE_SAFETY_DEPOSIT_BOX_V2: 'Validate Safety Deposit Box',
      SET_AUTHORITY: 'Set Authority',
      INIT_AUCTION_MANAGER_V2: 'Auction Manager Initialized',
      UPDATE_EXTERNAL_PRICE_ACCOUNT: 'External Price Account Updated',
      AUCTION_HOUSE_CREATE: 'Auction House Created',
      CLOSE_ESCROW_ACCOUNT: 'Escrow Account Closed',
      WITHDRAW: 'Withdraw',
      DEPOSIT: 'Deposit',
      TRANSFER: 'Transfer',
      BURN: 'Burn',
      BURN_NFT: 'Burn NFT',
      PLATFORM_FEE: 'Platform Fee',
      LOAN: 'Loan',
      REPAY_LOAN: 'Repay Loan',
      ADD_TO_POOL: 'Add to Pool',
      REMOVE_FROM_POOL: 'Remove from Pool',
      CLOSE_POSITION: 'Close Position',
      UNLABELED: 'Unlabeled',
      CLOSE_ACCOUNT: 'Close Account',
      WITHDRAW_GEM: 'Withdraw Gem',
      DEPOSIT_GEM: 'Deposit Gem',
      STAKE_TOKEN: 'Stake Token',
      UNSTAKE_TOKEN: 'Unstake Token',
      STAKE_SOL: 'Stake Sol',
      UNSTAKE_SOL: 'Unstake Sol',
      CLAIM_REWARDS: 'Rewards Claimed',
      BUY_SUBSCRIPTION: 'Subscription Bought',
      SWAP: 'Swap',
      INIT_SWAP: 'Swap Initialized',
      CANCEL_SWAP: 'Cancel Swap',
      REJECT_SWAP: 'Reject Swap',
      INITIALIZE_ACCOUNT: 'Initialize Account',
      TOKEN_MINT: 'Token Minted!',
      COMPRESSED_NFT_MINT: 'Compressed NFT Minted!',
    },
  },
  assertLocationScreen: {
    title: 'Assert Location',
    whichLocation: 'Which location do you want to assert?',
    searchLocation: 'Search for a location...',
    antennaSetup: 'Antenna Setup (Optional)',
    antennaSetupDescription:
      'Submit gain and elevation details for your Hotspot',
    gainPlaceholder: 'TX / RX Gain (dBi)',
    elevationPlaceholder: 'Elevation (meters)',
    locationNotFound: 'Location not found, Please try again.',
    mobileTitle: 'MOBILE',
  },
  antennaSetupScreen: {
    title: 'Antenna Setup',
    antennaSetup: 'Antenna Setup',
    antennaSetupDescription:
      'Submit gain and elevation details for your Hotspot',
    gainPlaceholder: 'TX / RX Gain (dBi)',
    elevationPlaceholder: 'Elevation (meters)',
    submit: 'Update Antenna',
    settingUp: 'Setting up your antenna...',
    settingUpBody: 'Please wait while we update your Antenna!',
    settingUpError: 'Antenna Setup failed. Please try again later.',
    settingUpComplete: 'Antenna Setup!',
    settingUpCompleteBody:
      'We’ve updated the gain and elevation of your antenna.',
  },
  swapsScreen: {
    title: 'Swap my Tokens',
    swapTokens: 'Swap Tokens',
    youPay: 'You Pay',
    youReceive: 'You Receive',
    chooseTokenToSwap: 'Choose a token to swap',
    chooseTokenToReceive: 'Choose a token to receive',
    swapComplete: 'Tokens swapped!',
    swapCompleteBody: 'The tokens in your wallet have been updated.',
    swappingTokens: 'Swapping your tokens...',
    swappingTokensBody:
      'You can exit this screen while you wait. We’ll update your Wallet momentarily.',
    swapError: 'Swap failed. Please try again later.',
    returnToSwaps: 'Return to Swaps',
    insufficientTokensToSwap:
      'You do not have sufficient tokens to swap that will result in more than 0.00000001 HNT.',
    swapAlertTitle: 'Are you sure you will like to swap your tokens?',
    swapAlertBody: 'This action is irreversible.',
    understood: 'Understood',
    treasurySwapWarningTitle: 'Treasury Swap Warning',
    treasurySwapWarningBody:
      'Please be advised that the subDAO treasury has only been active for a few days since the Solana migration. Swapping subtokens to HNT may be affected by a limited HNT supply in the subDAO treasury and may not reflect up-to-date prices. Please proceed with caution.',
    addRecipient: 'Add Recipient',
  },
  defiTutorial: {
    title: 'Safety Tips',
    enterDApps: 'Enter Browser',
    slides: [
      {
        body: "Always double-check URLs to ensure you're on the correct website before entering any sensitive information.",
        title: 'Verify the URL',
      },
      {
        body: 'Be cautious of phishing attacks and only use trusted websites.',
        title: 'Use Trusted Websites',
      },
      {
        body: 'Ensure websites are trustworthy and have been audited for security.',
        title: 'Do Your Research',
      },
      {
        body: 'Never share your private keys or seed phrases with anyone.',
        title: 'Protect Your Information',
      },
    ],
  },
  browserScreen: {
    topPicks: 'Verified Websites',
    myFavorites: 'My Favorites',
    myFavoritesEmpty:
      'No favorites yet. Start browsing and add your favorite URLs!',
    recentlyVisited: 'Recently Visited',
    recentlyVisitedEmpty: 'No recently visited URLs yet. Start browsing!',
    connectBullet1: 'View your wallet balance & activity',
    connectBullet2: 'Request Approval for transactions',
    connectToWebsitesYouTrust: 'Only connect to websites you trust',
    estimatedChanges: 'Estimated Changes',
    sendToken: 'Send {{amount}} {{ticker}}',
    receiveToken: 'Receive {{amount}} {{ticker}}',
    insufficientFunds: 'Insufficient funds',
    insufficientRentExempt:
      'Solana wallets must have a minimum of ~{{amount}} SOL to cover rent. The result of this transaction would leave your wallet with less than the rent-exempt minimum.',
    unableToSimulate:
      'Unable to simulate. Make sure you trust this app since approving can lead to loss of funds.',
    networkFee: 'Network Fee',
    totalNetworkFees: 'Total Network Fees',
    connect: 'Connect',
    approve: 'Approve',
    cancel: 'Cancel',
    insufficientSolToPayForFees: 'Insufficient SOL to pay for fees',
    wouldYouLikeToConvert:
      'Would you like to convert ~{{amount}} {{ticker}} to ~0.02 SOL for tx fees?',
  },
  accountTokenList: {
    tokens: 'Tokens',
    manage: 'Manage Visible Tokens',
  },
  accountView: {
    balance: 'Balance',
    fiveG: '5G',
    genesis: 'In Genesis',
    lock: 'Lock',
    nonTransferable: 'Non-Transferable',
    payment: 'Payment',
    deposit: 'Deposit',
    swaps: 'Swap',
    Redeem: 'Security Tokens',
    send: 'Send',
    stake: 'Stake',
    testnetTokens: 'Testnet Tokens',
    delegate: 'Delegate',
    airdrop: 'Airdrop',
  },
  addNewAccount: {
    title: 'Add New Wallet',
  },
  addNewContact: {
    addContact: 'Add Contact',
    address: {
      placeholder: 'e.g. 9h9h9r3hfi04nf0j083...',
      title: 'Enter {{network}} Address',
    },
    loadFailed: 'Cannot validate address. Please try again.',
    nickname: {
      placeholder: 'e.g. Loki Laufeyson',
      title: 'Enter Nickname',
    },
    title: 'Add New Contact',
  },
  addressBook: {
    addNext: 'Add New...',
    qrScanFail: {
      message: 'This QR scanner supports Solana wallet addresses only.',
      title: 'Unsupported QR Code',
    },
    searchContacts: 'Search Contacts...',
    title: 'Address Book',
  },
  auth: {
    enterCurrent: 'Enter your current PIN to continue',
    error: 'Incorrect PIN',
    signOut: 'Remove Wallet',
    signOutAlert: {
      body: 'You are removing all of your wallets. Do you have your recovery words? If you don’t, you will lose access to:\n\n- your Address Book\n- your HNT\n- your Wallet',
      title: 'Warning! Remove all wallets?',
    },
    title: 'Enter Your PIN',
  },
  burn: {
    amount: 'Amount (HNT)',
    equivalent: 'Equivalent to (DC)',
    ledger: {
      subtitle:
        'Please verify the burn transaction on your Ledger device {{name}}',
      title: 'Ledger Approval',
    },
    memo: 'Memo',
    noAcct: {
      message: 'No wallet for this network found',
      title: 'Wallet not found',
    },
    recipient: 'Recipient Address',
    swipeToBurn: 'Swipe to Burn',
    title: 'Burn',
    subdao: '{{subdao}} subDAO',
    choooseSubDAO: 'Choose a subDAO',
  },
  delegate: {
    title: 'Delegate',
    swipe: 'Swipe to Delegate',
    amount: 'Amount (DC)',
  },
  connectedWallets: {
    add: 'Add New Wallet',
    addTestnet: 'Add New Testnet Wallet',
  },
  dappLogin: {
    account: {
      subtitle: 'Which wallet do you want to authenticate with {{appName}}?',
      title: 'Choose your\nWallet',
    },
    connect: {
      continue: 'Continue',
      subtitle: 'Authenticate {{appName}}\nwith your Helium Wallet?',
      title: 'Connect to {{appName}}?',
    },
    error: 'Failed to verify {{appName}}',
    ledger: {
      subtitle:
        'You must sign burn transaction to login to {{appName}}. Please verify the burn transaction on your Ledger device {{deviceName}}',
      title: 'Ledger Approval',
    },
    login: 'Login',
    timeoutAlert: {
      title: 'Login Failed',
      message:
        'Please close and reopen the login screen in Crowdspot and scan a new QR code to try again.',
    },
  },
  editContact: {
    delete: 'Delete',
    deleteConfirmMessage:
      'Are you sure you want to delete your contact, {{alias}}?',
    deleteConfirmTitle: 'Delete Contact?',
    save: 'Save',
    title: 'Edit Contact',
  },
  finePrint: {
    body: 'By continuing, you agree to the',
  },
  generic: {
    airdrop: 'Airdrop',
    account: 'Wallet',
    and: 'and',
    back: 'Back',
    cancel: 'Cancel',
    clear: 'Clear',
    confirm: 'Confirm',
    copied: 'Copied {{target}}',
    copiedSeedPhrase: 'Copied Seed Phrase',
    copy: 'Copy',
    copyToClipboard: 'Copy to clipboard',
    error: 'Error',
    fee: 'Fee',
    loadFailed: 'Cannot validate address. Please try again.',
    loadMore: 'Load More',
    loading: 'Loading',
    calculatingTransactionFee: 'Calculating Transaction Fee...',
    mainnet: 'Mainnet',
    next: 'Next',
    solanaAddress: 'Solana Address',
    notValidAddress: 'Not a valid Wallet Address.',
    notValidSolanaAddress: 'Not a valid Solana Address.',
    insufficientBalance: 'Insufficient balance',
    ok: 'OK',
    period: '.',
    retry: 'Retry',
    share: 'Share',
    skip: 'Skip',
    success: 'Success',
    testnet: 'Testnet',
    total: 'Total',
    tryAgain: 'Try Again',
    somethingWentWrong: 'Something went wrong, please try again',
    submitSuccess: 'Transaction Submit',
    understand: 'I Understand',
    noData: 'No Data',
    devnetTokensWarning: 'Warning! These are devnet tokens for testing only.',
    solanaHealthy: 'Solana RPC is healthy.',
    solanaHealthDown: 'Solana RPC is down. Please try again later.',
    solanaTpsSlow: 'Solana RPC is slow. {{ tps }} tps.',
    sendLogs: 'Send Logs',
  },
  hntKeyboard: {
    enterAmount: 'Enter {{ticker}} Amount',
    fee: '+{{value}} Fee',
    hntAvailable: '{{amount}} Available',
    validFor: 'valid for {{time}}',
  },
  intro: {
    subtitle: 'Setup should only take\na few minutes.',
    tap: 'Get Started',
    title: 'Welcome to\nHelium Wallet',
  },
  ledger: {
    chooseType: {
      bluetooth: {
        title: 'Bluetooth',
        types: 'Nano X',
      },
      title: 'How is your device connected?',
      usb: {
        title: 'USB Cable',
        types: 'Nano S, Nano S Plus, Nano X',
      },
    },
    connectError: {
      steps: [
        'Check network connection',
        'Check Bluetooth is enabled',
        'Open your Ledger device.',
        'Open Helium app on Ledger Device',
      ],
      subtitle:
        'Please check that your Ledger\nDevice is connected to this phone.\n\nIf not, follow these steps:',
      title: 'Pairing Failed',
    },
    deviceNotFound: {
      message:
        'Could not find your ledger device. Please make sure it is connected and the Helium app is open.',
      title: 'Device Not Found',
    },
    pairStart: {
      pair: 'Pair with Ledger',
      subtitle:
        'Tap the button below to\nsearch for nearby Ledger\nWallets to link with.',
      title: 'Pair Ledger\nto Wallet',
    },
    payment: {
      subtitle:
        'Please verify the payment transaction on your Ledger device {{name}}',
      title: 'Ledger Approval',
    },
    scan: {
      connectionError: 'Ledger Connection Error',
      permissionDialog: {
        later: 'Ask Me Later',
        message:
          'Location permission is needed to enable a bluetooth connection',
        title: 'Location Permission',
      },
      subtitle:
        'Please make sure your\nLedger is unlocked with\nbluetooth enabled',
      subtitleUsb:
        'Please make sure your\nLedger is unlocked and\nconnected via USB',
      title: 'Looking\nfor Devices',
    },
    show: {
      accountsAlreadyLinked: 'Wallets Already Linked ({{count}})',
      addNewAccount: 'Add New Wallet',
      alias: 'Ledger Wallet {{accountIndex}}',
      close: 'Close',
      deselectAll: 'Deselect All',
      emptyAccount:
        "Can't add a new wallet before you've received assets on your {{account}}",
      help: 'Verify that the address shown on the Ledger device matches.',
      next: 'Import Wallet(s)',
      selectAll: 'Select All',
      subtitle:
        'This Ledger device can authorize transactions for the below Helium Account. ',
      title: 'Select Wallets',
    },
    start: {
      help: 'How does it work?',
      next: 'Pair with Ledger',
      subtitle:
        'Please make sure your Ledger is unlocked with Bluetooth enabled',
      title: 'Pair with Ledger',
    },
    success: {
      next: 'View Wallet',
      subtitle: 'Your Ledger wallet is now available in your Helium Wallet.',
      title: 'Ledger Paired Successfully',
    },
  },
  linkWallet: {
    body: 'By Linking Helium Wallet to {{appName}}, you can safely sign blockchain transactions without re-entering your seed phrase.',
    no: 'No, Cancel',
    testnet: {
      message: 'Linking requires a mainnet wallet.',
      title: 'Wallets not found',
    },
    title: 'Link Helium Wallet\nto {{appName}}?',
    yes: 'Yes, Link my Wallet',
  },
  notifications: {
    accountUpdates: '{{title}} Updates',
    emptyTitle: 'No Notifications',
    heliumUpdates: 'Helium Updates',
    title: 'My Notifications',
    walletUpdates: 'Wallet Updates',
  },
  onboarding: {
    create: 'New',
    import: 'Import',
    ledger: 'Ledger',
  },
  ordinals: [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
    '13th',
    '14th',
    '15th',
    '16th',
    '17th',
    '18th',
    '19th',
    '20th',
    '21st',
    '22nd',
    '23rd',
    '24th',
  ],
  payment: {
    addRecipient: '+ Add Recipient',
    backToAccounts: 'Back to Wallets',
    enterAddress: 'Enter Address',
    enterAmount: 'Enter {{ticker}} Amount',
    enterMemo: 'Enter Memo (Optional)',
    fee: '+{{value}} Fee',
    insufficientFunds: 'Insufficient {{token}}',
    ledgerTooManyRecipients:
      'Ledger payment transactions\nare limited to 1 recipient.',
    max: 'Max',
    memoBytes: '{{used}}/{{total}} Bytes',
    mobilePrompt: {
      message:
        "Sending MOBILE has a small transaction fee that's paid from your HNT balance. If you have a 0 HNT balance, the payment will not succeed.",
      title: 'MOBILE Payment',
    },
    netTypeQrError: "No wallets support the scanned address's network type.",
    pay: 'Pay',
    qrScanFail: {
      message:
        'This QR scanner supports payment transactions and wallet addresses.',
      title: 'Unsupported QR Code',
    },
    selectContact: 'Select Contact',
    selfPay: 'Self Pay',
    send: 'Send',
    sendButton: 'Swipe to Send {{ticker}}',
    senderAccount: 'Sender Wallet',
    sending: 'Sending...',
    solana: {
      warning: {
        title: 'Solana {{cluster}} Payment',
        message: 'You are sending a payment on Solana {{cluster}}.',
      },
    },
    submitError:
      'There was an error submitting this transaction. Please try again.\n\n{{details}}',
    submitFailed: 'Transaction\nFailed',
    submitSuccess: 'Transaction\nSubmitted',
    title: 'Send {{ticker}}',
    total: 'Total',
    totalRecipients: '{{count}} Recipient',
    totalRecipients_one: '{{count}} Recipient',
    totalRecipients_other: '{{count}} Recipients',
    totalRecipients_plural: '{{count}} Recipients',
    wrongNetType: 'Wrong Net Type',
  },
  placeholder: {
    accountBalanceValue: 'Wallet Balance: {{balance}}',
    enterAccountAddress: 'Enter Wallet Address',
    fetchMoreActivity: 'Fetch More Activity',
    getAccountData: 'Get Wallet Data',
  },
  qrScanner: {
    deniedAlert: {
      message:
        'Camera permissions denied. To re-enable, go to your phone’s settings.',
      ok: 'Go to Settings',
      title: 'Camera Disabled',
    },
  },
  request: {
    amount: 'Amount (Optional)',
    copied: 'Link has been copied to your clipboard',
    enterAmount: 'Enter {{ticker}} Amount',
    link: 'Deeplink',
    memo: 'Memo',
    payee: 'Payee',
    qr: 'QR',
    requestType: 'Request {{ticker}}',
    title: 'Generate Request',
  },
  restoreAccount: {
    alert: {
      button12: '12 Words',
      button24: '24 Words',
      message: 'Does your wallet {{address}} have 12 or 24 security words?',
      title: 'Restore Wallet',
    },
    errorAlert: {
      message:
        'The words you entered do not match the wallet you are restoring.',
      title: 'Error Restoring Wallet',
    },
    missing: 'Wallet has no private key. Tap to restore.',
    missingAlert: {
      button1: 'Restore wallet with 12-24 Words',
      message:
        'Your private key for wallet {{address}} is missing and must be restored.',
      title: 'Private Key Not Found',
    },
  },
  settings: {
    confirmSignout: {
      forgotAlert: {
        body: 'Would you like to reveal your wallets words?',
        title: 'Reveal Words',
      },
      title: 'Confirm Your\nWords To Remove Wallet Data.',
    },
    revealPrivateKey: {
      alertMessage:
        "This will access and display your private key from your device's secure storage",
      alertTitle: 'Are you sure?',
      done: 'Done',
      subtitle:
        '<secondaryText>Do not share your private key!</secondaryText><red500>\n\nIf someone has your private key they will have full control of your wallet! Do not enter this into any websites. Any individual asking for this key is likely a scammer.</red500>',
      tap: 'Tap to reveal your private key',
      title: 'Your Private Key',
    },
    revealWords: {
      next: 'I have written these down',
      subtitle:
        '<secondaryText>Never give these words to anyone, or enter them into any website. <red500>Any person or website asking for these words is likely a scammer</red500>. It is crucial you write all of these\n{{numWords}} words down, in order, and keep them safe.</secondaryText><red500>\n\nHelium cannot recover these words.</red500>',
      title: 'Your {{numWords}} Word Password',
      warning: 'Helium cannot recover these words',
    },
    sections: {
      account: {
        alias: 'Wallet Alias',
        copyAddress: 'Copy Address',
        revealWords: 'Reveal Words',
        shareAddress: 'Share Address',
        signOut: 'Remove Wallet',
        signOutAlert: {
          body: 'You are removing your wallet, {{alias}}. Do you have your recovery words? If you don’t, you will lose access to:\n\n- your HNT\n- your Wallet',
          bodyLastAccount:
            'You are removing your only wallet, {{alias}}. Do you have your recovery words? If you don’t, you will lose access to:\n\n- your Address Book\n- your HNT\n- your Wallet',
          iCloudMessage:
            '\n\nAny device using the same iCloud account will also be signed out.',
          title: 'Remove {{alias}}?',
        },
        title: '{{alias}} Wallet Settings',
        migrateWallet: 'Migrate Wallet',
      },
      app: {
        convertHntToCurrency: 'Convert HNT to Currency',
        currency: 'Currency',
        language: 'Language',
        title: 'App Settings',
        version: 'App Version',
      },
      backup: {
        revealPrivateKey: 'Reveal Private Key',
        revealWords: 'Reveal Words',
        title: '{{alias}} Wallet Backup',
      },
      defaultAccount: {
        disableMessage:
          'Wallet app requires a default wallet. Select a different account by tapping its account settings to set as default.',
        disableTitle: 'Default Wallet Required',
        enableMessage:
          'This will update your default wallet from {{aliasOld}} to {{aliasNew}}. You can update this in Settings later if you change your mind.',
        enableTitle: 'Update Default Wallet?',
        title: 'Default Wallet',
      },
      dev: {
        solana: {
          helperText: 'More Info',
          prompt: {
            message:
              'By enabling preview, you will see your equivalent Helium address on Solana.\n\nAll token balances are test tokens on Solana represented as tHNT, tMOBILE, etc.\n\nSolana balances are a snapshot of your Helium balance and may be reset or updated at any time.\n\nYou can interact with test tokens but they should not be traded.',
            title: 'Solana Preview',
          },
          title: 'Preview Solana Experience',
        },
        solanaCluster: { title: 'Solana Cluster' },
        testnet: {
          enablePrompt: {
            getTnt: 'Get TNT',
            message:
              'Importing and Creating Testnet wallets enabled. To acquire TNT (Testnet tokens), go to faucet.helium.wtf.',
            title: 'Enable Testnet Access',
          },
          helperText: 'To disable Testnet, signout of of\nall Testnet accounts',
          title: 'Enable Testnet',
        },
        title: 'Developer Settings',
      },
      finePrint: {
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        title: 'The Fine Print',
      },
      security: {
        authIntervals: {
          after_1_hr: 'After 1 hour',
          after_1_min: 'After 1 minute',
          after_4_hr: 'After 4 hours',
          after_5_min: 'After 5 minutes',
          after_15_min: 'After 15 minutes',
          immediately: 'Immediately',
        },
        enablePin: 'Enable PIN',
        requirePin: 'Require PIN',
        requirePinForPayments: 'Require PIN for Payments',
        resetPin: 'Reset PIN',
        title: 'Security Settings',
      },
      shareAddress: {
        copiedToClipboard: 'Copied {{address}} to clipboard',
      },
    },
    title: 'Settings',
  },
  signHotspot: {
    burnAmounts: 'Amount To Be Burned',
    elevation: 'Elevation:',
    error: {
      subtitle:
        'Unable to add this Hotspot to the Helium Network. Contact {{maker}} to troubleshoot this issue.',
      takeMeBack: 'Go Back to {{maker}}',
      title: 'Invalid Link',
    },
    gain: 'Gain:',
    location: 'Location:',
    maker: 'Maker:',
    name: 'Hotspot Name:',
    newOwner: 'New Owner:',
    owner: 'Owner:',
    title: 'Onboard {{networks}}\nHotspot?',
    titleLocationOnly: 'Update Location?',
    titleTransfer: 'Transfer Hotspot?',
  },
  statusBanner: {
    description: 'Last updated {{date}}. Tap for info.',
  },
  transactions: {
    added: 'Hotspot Added to Blockchain',
    addToAddressBook: {
      message: 'Would you like to add this wallet to your address book?',
      title: 'Add to Address Book',
    },
    amount: 'Amount',
    amountToPayee: 'Amount to Payee {{index}}',
    amountToSeller: 'Amount to Seller',
    block: 'Block',
    burnHNT: 'Burn {{ticker}}',
    buyer: 'Buyer',
    date: 'Date',
    feePaidBy: 'Fee paid by {{feePayer}}',
    from: 'From',
    hash: 'Hash',
    hotspot: 'Hotspot',
    iotRewards: 'IOT Rewards',
    location: 'Confirm Location',
    location_v2: 'Update Location',
    memo: 'Memo',
    mining: 'Mining Rewards',
    mobileRewards: 'Mobile Rewards',
    newAddress: 'New Address',
    newOwner: 'New Owner',
    oldAddress: 'Old Address',
    oldOwner: 'Old Owner',
    owner: 'Owner {{index}}',
    pending: {
      inProcess: 'In Process',
      pending: 'Pending',
      sending: 'Payment Sending...',
    },
    received: 'Received {{ticker}}',
    rewardTypes: {
      consensus: 'Consensus',
      data_credits: 'Packet Transfer',
      overages: 'Overages',
      poc_challengees: 'PoC',
      poc_challengers: 'Challenger',
      poc_witnesses: 'Witness',
      securities: 'Security Tokens',
    },
    seller: 'Seller',
    sent: 'Sent {{ticker}}',
    stake: 'Stake',
    stakeAmount: 'Stake Amount',
    stakeValidator: 'Stake {{ticker}}',
    stakingFee: 'Staking Fee',
    tokens: 'Tokens',
    totalAmount: 'Total Amount',
    transaction: 'Transaction',
    transfer: 'Hotspot Transfer',
    transferBuy: 'Transfer Hotspot (Buy)',
    transferSell: 'Transfer Hotspot (Sell)',
    transferValidator: 'Transfer Stake',
    txnFee: 'Transaction Fee',
    txnFeePaidBy: 'Transaction Fee paid by {{feePayer}}',
    unstakeValidator: 'Unstake {{ticker}}',
    validator: 'Validator',
    delegated: 'Delegated',
    signPaymentTxn: 'Sign this transaction to send your payment.',
    signTransferCollectableTxn:
      'Sign this transaction to transfer your collectable.',
    signSwapTxn: 'Sign this transaction to swap your tokens.',
    signGenericTxn: 'Sign this transaction to send your txn.',
    signClaimRewardsTxn: 'Sign this transaction to claim your rewards.',
    signClaimAllRewardsTxn: 'Sign this transaction to claim all your rewards.',
    signMintDataCreditsTxn: 'Sign this transaction to mint your data credits.',
    signDelegateDCTxn: 'Sign this transaction to delegate your data credits.',
    signAssertLocationTxn: 'Sign this transaction to assert the location.',
    recipientNonExistent:
      'Recipient Account is empty, Double check the address before signing.',
  },
}
