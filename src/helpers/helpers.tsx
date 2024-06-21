const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const parseDate = (date: string | Date) => {
  const myDate = new Date(date)

  const splitDate = myDate
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
    .split('/')
  return `${splitDate[1]} / ${splitDate[0]} / ${splitDate[2]}`
}

export const getMonthName = (monthNumber?: number) => {
  if (!monthNumber || monthNumber < 1 || monthNumber > 12) return

  return monthNames[monthNumber - 1]
}
