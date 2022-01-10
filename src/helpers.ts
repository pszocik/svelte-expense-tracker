export const getCurrentDate = () => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${year}-${month < 10 ? '0' + month.toString() : month}-${
    day < 10 ? '0' + day.toString() : day
  }`
}
