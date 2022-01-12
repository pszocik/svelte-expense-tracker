<script>
  import { onMount } from 'svelte'
  import { getCategories, getExpenses } from '../supabaseServices'
  import { items, categories } from '../stores'
  import { supabase } from '../supabaseClient'

  onMount(async () => {
    const itemsResponse = await getExpenses()
    $items = itemsResponse.data

    const categoriesResponse = await getCategories()
    $categories = categoriesResponse.data
  })
</script>

<slot />
