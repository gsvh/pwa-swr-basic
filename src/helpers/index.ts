export function convertToTimeFormat(data?: string | Date) {
  if (!data) return 'No time yet'
  const date = new Date(data)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return (
    (hours < 10 ? '0' + hours : hours) +
    ':' +
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds)
  )
}

export function getButtonText(
  isOnline: boolean,
  timeIsUpdating: boolean
): string {
  if (isOnline) {
    if (timeIsUpdating) {
      return 'Updating...'
    } else {
      return 'Update times'
    }
  } else {
    return 'Update browser time only'
  }
}
