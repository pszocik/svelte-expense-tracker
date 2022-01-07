export const getCurrentDate = () => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  let dayStr: string, monthStr: string
  if (month < 10) monthStr = '0' + month.toString()
  if (day < 10) dayStr = '0' + day.toString()

  return `${year}-${monthStr}-${dayStr}`
}
