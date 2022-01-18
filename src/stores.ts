import { Writable, writable } from 'svelte/store'
import type { Category, Expense } from './types'

export const items: Writable<Expense[]> = writable(<Expense[]>[])
export const categories: Writable<Category[]> = writable(<Category[]>[])

export const user: Writable<any> = writable(false)
