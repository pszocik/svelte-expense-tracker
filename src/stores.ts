import { Writable, writable } from 'svelte/store'
import type { Expense } from './Types'

export const items: Writable<Expense[]> = writable(<Expense[]>[])
export const categories: Writable<string[]> = writable(<string[]>[
  'Household expenses',
  'Fun',
  'Food',
  'Take-away'
])
