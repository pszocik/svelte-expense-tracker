<script lang="ts">
  import type { Expense } from '../Types'

  export let item: Expense
</script>

<p>Expense: {item.expense} Date: {item.date} Category: {item.category}</p>
