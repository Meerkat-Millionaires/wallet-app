import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { useAsync } from 'react-async-hook'
import * as SecureStore from 'expo-secure-store'
import { OSNotification } from 'react-native-onesignal'
import { SecureStorageKeys } from './AppStorageProvider'
import { WALLET_UPDATES_ITEM } from '../features/notifications/notificationTypes'
import { Notification } from '../generated/graphql'

const useNotificationStorageHook = () => {
  const [selectedList, setSelectedList] = useState<string>(WALLET_UPDATES_ITEM)
  const [selectedNotification, setSelectedNotification] =
    useState<Notification>()
  const [openedNotification, setOpenedNotification] = useState<OSNotification>()

  useAsync(async () => {
    try {
      const nextSelectedList = await SecureStore.getItemAsync(
        SecureStorageKeys.SELECTED_LIST,
      )

      if (nextSelectedList) {
        setSelectedList(nextSelectedList)
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  const updateSelectedList = useCallback(async (nextSelectedList: string) => {
    setSelectedList(nextSelectedList)
    return SecureStore.setItemAsync(
      SecureStorageKeys.SELECTED_LIST,
      nextSelectedList,
    )
  }, [])

  return {
    selectedList,
    updateSelectedList,
    selectedNotification,
    setSelectedNotification,
    openedNotification,
    setOpenedNotification,
  }
}

const initialState = {
  selectedList: WALLET_UPDATES_ITEM,
  updateSelectedList: async () => undefined,
  selectedNotification: undefined,
  setSelectedNotification: () => undefined,
  openedNotification: undefined,
  setOpenedNotification: () => undefined,
}

const NotificationStorageContext =
  createContext<ReturnType<typeof useNotificationStorageHook>>(initialState)
const { Provider } = NotificationStorageContext

const NotificationStorageProvider = ({ children }: { children: ReactNode }) => {
  return <Provider value={useNotificationStorageHook()}>{children}</Provider>
}

export const useNotificationStorage = () =>
  useContext(NotificationStorageContext)

export default NotificationStorageProvider