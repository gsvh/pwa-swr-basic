import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useInternetConnectivity } from './useInternetConnectivity'

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<unknown> =>
  fetch(...args).then((res: Response) => res.json())

export function useTime() {
  const { isOnline } = useInternetConnectivity()
  const [error, setError] = useState<string | null>(null)
  const {
    data,
    isLoading,
    isValidating,
    error: swrError,
    mutate,
  } = useSWR(
    'https://worldtimeapi.org/api/timezone/Africa/Johannesburg',
    fetcher
  )

  useEffect(() => {
    // only set error if the user is online, since fetching while offline will result in an expected error
    if (swrError && isOnline && !(isLoading || isValidating)) {
      setError('An error has occured')
    } else if (error) {
      setError(null)
    }
  }, [swrError, error, isOnline, isLoading, isValidating])

  const fetchTime = () => {
    console.log('Fetching time ...')
    mutate()
  }

  return {
    time: data as { datetime: string } | undefined,
    timeIsUpdating: isLoading || isValidating,
    fetchTime,
    error: error,
  }
}
