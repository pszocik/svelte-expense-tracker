<script lang="ts">
  import Input from './core/Input.svelte'
  import Select from './core/Select.svelte'
  import Form from './core/Form.svelte'
  import type { Expense } from '../types'
  import { categories, items, user } from '../stores.ts'
  import { getCurrentDate } from '../helpers/helpers'
  import BindableInput from './core/BindableTextInput.svelte'
  import { createExpense } from '../supabaseServices.js'

  const handleSubmit = async (e: CustomEvent<{ data: Expense }>) => {
    const item = e?.detail?.data
    const newItem = await createExpense(item, $user)
    $items = [...($items as Expense[]), newItem.data[0]]
    expense = ''
    amount = ''
  }
  const handleReset = () => {
    expense = ''
    amount = ''
  }

  let expense = ''
  let amount = ''
  const today = getCurrentDate()
</script>

<Form on:submit={handleSubmit} on:reset={handleReset}>
  <BindableInput label="Name:" name="name" bind:value={expense} />
  <Input label="Date:" name="date" type="date" value={today} />
  <Select label="Category" name="category">
    {#each $categories as category}
      <option value={category.id}>{category.name}</option>
    {/each}
  </Select>
  <BindableInput label="Amount:" name="amount" bind:value={amount} />
  <button type="submit">Add</button>
  <button type="reset">Reset</button>
</Form>
