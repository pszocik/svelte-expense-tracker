<script lang="ts">
  import { categories, items } from '../stores'
  import { Expense } from '../Types.ts'
  import Select from './core/Select.svelte'
  import Input from './core/Input.svelte'
  let categoryFilter = '-'
  let filteredItems: Expense[]
  $: filteredItems =
    categoryFilter === '-'
      ? $items
      : $items.filter(item => item.category === categoryFilter)
</script>

<h1>Items</h1>
<Select label="Category Filter" name="category-filter" bind:value={categoryFilter}>
  <option value="-">-</option>
  {#each $categories as category}
    <option value={category}>{category}</option>
  {/each}
</Select>
<section class="date-range">
  <Input type="date" name="date-from" label="Date From" />
  <Input type="date" name="date-to" label="Date To" />
</section>
{#each filteredItems as item}
  <p>Expense: {item.expense} Date: {item.date} Category: {item.category}</p>
{/each}

<style>
  .date-range {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  section.date-range > * {
    margin: 10px;
  }
</style>
