import type { Expense } from './Types'

export const filterItemsByDate = (
  item: Expense,
  dateFrom: string = undefined,
  dateTo: string = undefined
): boolean | Expense => {
  if (dateTo && dateFrom) {
    return (
      new Date(item.date) >= new Date(dateFrom) && new Date(item.date) <= new Date(dateTo)
    )
  }
  if (dateFrom) {
    return new Date(item.date) >= new Date(dateFrom)
  }
  if (dateTo) {
    return new Date(item.date) <= new Date(dateTo)
  }
  return item
}

export const filterItemsByCategory = (
  item: Expense,
  categoryFilter: string
): boolean | Expense => {
  if (categoryFilter !== '-') return item.category === categoryFilter
  return item
}
