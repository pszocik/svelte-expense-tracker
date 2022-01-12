import { supabase } from './supabaseClient'
import type { Expense } from './types'

export function getUser() {
  return supabase.auth.user()
}

export async function signIn({ email }) {
  const { error } = await supabase.auth.signIn({ email })
  return { data: !error, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { data: !error, error }
}

export async function createExpense(expense: Expense, user) {
  const { data, error } = await supabase
    .from('expenses')
    .insert([{ ...expense, user_id: user.id }])
  return { data, error }
}

export async function deleteExpense(itemId: string) {
  const { data, error } = await supabase.from('expenses').delete().match({ id: itemId })
  return { data, error }
}

export async function getExpenses() {
  const { data, error } = await supabase.from('expenses').select()
  return { data, error }
}

export async function getCategories() {
  const { data, error } = await supabase.from('categories').select()
  return { data, error }
}
