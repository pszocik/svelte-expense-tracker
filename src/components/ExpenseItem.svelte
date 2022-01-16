<script lang="ts">
  import type { Expense } from '../types'

  export let item: Expense
</script>

<p>
  Expense: {item.name} Date: {item.date} Category: {item.category} Amount: {item.amount}
</p>

<style>
  p {
    text-align: center;
  }
</style>
