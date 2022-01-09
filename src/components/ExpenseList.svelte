<script lang="ts">
  import { categories, items } from '../stores'
  import { Expense } from '../Types.ts'
  import Select from './core/Select.svelte'
  import BindableDateInput from './core/BindableDateInput.svelte'
  import { filterItemsByCategory, filterItemsByDate } from '../filters'

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

<h1>Items</h1>
<Select label="Category Filter" name="category-filter" bind:value={categoryFilter}>
  <option value="-">-</option>
  {#each $categories as category}
    <option value={category}>{category}</option>
  {/each}
</Select>
<section class="date-range">
  <BindableDateInput name="date-from" label="Date From" bind:value={dateFrom} />
  <BindableDateInput name="date-to" label="Date To" bind:value={dateTo} />
</section>
{#each filteredList as item}
  <p>Expense: {item.expense} Date: {item.date} Category: {item.category}</p>
{/each}

<style>
  .date-range {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
</style>
