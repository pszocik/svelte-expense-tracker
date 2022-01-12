import { Writable, writable } from 'svelte/store'
import type { Category, Expense } from './types'

type CategoriesWritable = Writable<Category[]>

export const items: Writable<Expense[]> = writable(<Expense[]>[])
export const categories: CategoriesWritable = writable(<Category[]>[])

export const user: Writable<any> = writable(false)
