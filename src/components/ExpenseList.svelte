<script lang="ts">
  import { categories, items } from '../stores'
  import { Expense } from '../Types.ts'
  import Select from './core/Select.svelte'
  import BindableDateInput from './core/BindableDateInput.svelte'
  import { filterItemsByCategory, filterItemsByDate } from '../filters'
  import ExpenseItem from './ExpenseItem.svelte'

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
</script>

<section class="expense-list">
  <section class="filters">
    <Select
      class="category-filter"
      label="Category Filter"
      name="category-filter"
      bind:value={categoryFilter}
    >
      <option value="-">-</option>
      {#each $categories as category}
        <option value={category}>{category}</option>
      {/each}
    </Select>
    <BindableDateInput name="date-from" label="Date From" bind:value={dateFrom} />
    <BindableDateInput name="date-to" label="Date To" bind:value={dateTo} />
  </section>
  <h1>Items</h1>
</section>
{#each filteredList as item}
  <ExpenseItem {item} />
{/each}

<style>
  h1 {
    text-align: center;
  }
  .expense-list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .filters {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>
