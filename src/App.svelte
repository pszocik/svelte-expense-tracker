<script>
  import ExpenseForm from './components/ExpenseForm.svelte'
  import ExpenseList from './components/ExpenseList.svelte'
  import { user } from './stores'
  import { getUser, signOut } from './supabaseServices'
  import Login from './components/auth/Login.svelte'
  import { supabase } from './supabaseClient'
  import AuthApp from './components/AuthApp.svelte'

  $user = getUser()
  // $user = true
  supabase.auth.onAuthStateChange((event, session) => {
    $user = session ? session.user : false
  })
</script>

{#if $user}
  <button on:click={signOut}>Sign out</button>
{/if}
<main class="container">
  {#if $user}
    <AuthApp>
      <ExpenseForm />
      <ExpenseList />
    </AuthApp>
  {:else}
    <Login />
  {/if}
</main>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
  }
</style>
