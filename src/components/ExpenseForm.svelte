<script lang="ts">
  import Input from './core/Input.svelte'
  import Select from './core/Select.svelte'
  import Form from './core/Form.svelte'
  import type { Expense } from '../Types'
  import { categories, items } from '../stores.ts'

  let formEl: HTMLFormElement
  const handleSubmit = (e: CustomEvent<{ data: Expense }>) => {
    const item = e?.detail?.data
    $items = [...($items as Expense[]), item]
    formEl.reset()
  }
</script>

<Form on:submit={handleSubmit} bind:this={formEl}>
  <Input label="Expense:" name="expense" />
  <Input label="Date:" name="date" type="date" />
  <Select label="Category" name="category">
    {#each $categories as category}
      <option value={category}>{category}</option>
    {/each}
  </Select>
  <button type="submit">Add</button>
</Form>
