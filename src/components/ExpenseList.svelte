<script lang="ts">
  import { categories, items } from '../stores'
  import { Expense } from '../types.ts'
  import Select from './core/Select.svelte'
  import BindableDateInput from './core/BindableDateInput.svelte'
  import { filterItemsByCategory, filterItemsByDate } from '../helpers/filters'
  import ExpenseItem from './ExpenseItem.svelte'
  import Button from './core/Button.svelte'
  import { deleteExpense } from '../supabaseServices'

  let filteredList: Expense[]

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  $: filteredList = $items
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .filter((item: Expense) => filterItemsByCategory(item, categoryFilter))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .filter((item: Expense) => filterItemsByDate(item, dateFrom, dateTo))
  let categoryFilter = '-'
  let dateFrom: string
  let dateTo: string

  const deleteItem = async (itemId: string) => {
    try {
      await deleteExpense(itemId)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
      $items = $items.filter(item => item.id != itemId)
    } catch (error) {
      console.log(error)
    }
  }
</script>

<section class="expense-list">
  <h1>Filter</h1>
  <section class="filters">
    <Select label="Category Filter" name="category-filter" bind:value={categoryFilter}>
      <option value="-">-</option>
      {#each $categories as category}
        <option value={category.id}>{category.name}</option>
      {/each}
    </Select>
    <BindableDateInput name="date-from" label="Date From" bind:value={dateFrom} />
    <BindableDateInput name="date-to" label="Date To" bind:value={dateTo} />
  </section>

  <h1>Items</h1>
  <section class="items">
    {#each filteredList as item}
      <section class="item">
        <ExpenseItem {item} />
        <Button on:click={() => deleteItem(item.id)}>Delete</Button>
      </section>
    {:else}
      <p>No items.</p>
    {/each}
  </section>
</section>

<style>
  h1,
  p {
    text-align: center;
  }
  .expense-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: flex-start;
  }

  .filters {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item {
    display: flex;
    flex-direction: row;
  }
</style>
