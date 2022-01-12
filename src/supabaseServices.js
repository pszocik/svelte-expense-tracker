import { supabase } from './supabaseClient'

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

export async function createExpense(expense, user) {
  console.log(expense)
  const { data, error } = await supabase
    .from('expenses')
    .insert([{ ...expense, user: user.id }])
  console.log(data)
  console.log(error)
  return { data, error }
}
