<script lang="ts">
  import ExpenseForm from './components/ExpenseForm.svelte'
  import ExpenseList from './components/ExpenseList.svelte'
</script>

<main class="container">
  <ExpenseForm />
  <ExpenseList />
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
