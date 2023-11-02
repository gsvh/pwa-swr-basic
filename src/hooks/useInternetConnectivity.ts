import { useState } from 'react'
import { useEventListener } from 'usehooks-ts'

/**
 * Basic hook to check if the user is connected to the internet or not
 * @returns {isOnline: boolean}
 */
export function useInternetConnectivity() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEventListener('online', () => setIsOnline(true))
  useEventListener('offline', () => setIsOnline(false))

  return { isOnline }
}
