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
