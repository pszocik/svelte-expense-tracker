export interface Expense {
  id: string
  name: string
  date: string
  category: number
  amount: number
  user_id: number
}

export interface Category {
  id: number
  name: string
}
