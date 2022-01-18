<script>
  import { onMount } from 'svelte'
  import { getCategories, getExpenses } from '../supabaseServices'
  import { items, categories } from '../stores'

  onMount(async () => {
    const itemsResponse = await getExpenses()
    $items = itemsResponse.data

    const categoriesResponse = await getCategories()
    $categories = categoriesResponse.data
  })
</script>

<slot />
