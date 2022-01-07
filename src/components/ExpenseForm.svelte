<script lang="ts">
  import Input from './core/Input.svelte'
  import Select from './core/Select.svelte'
  import Form from './core/Form.svelte'
  import type { Expense } from '../Types'
  import { categories, items } from '../stores.ts'
  import { getCurrentDate } from '../helpers'

  let formEl: HTMLFormElement
  const handleSubmit = (e: CustomEvent<{ data: Expense }>) => {
    const item = e?.detail?.data
    $items = [...($items as Expense[]), item]
    formEl.reset()
  }
  const today = getCurrentDate()
</script>

<Form on:submit={handleSubmit} bind:this={formEl}>
  <Input label="Expense:" name="expense" />
  <Input label="Date:" name="date" type="date" value={today} />
  <Select label="Category" name="category">
    {#each $categories as category}
      <option value={category}>{category}</option>
    {/each}
  </Select>
  <button type="submit">Add</button>
  <button type="reset">Reset</button>
</Form>
