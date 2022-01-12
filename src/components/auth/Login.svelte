<script>
  import { signIn } from '../../supabaseServices'
  import Form from '../core/Form.svelte'
  import BindableTextInput from '../core/BindableTextInput.svelte'

  let signInPromise = Promise.resolve({})
  let email = ''
  const handleSignIn = () => {
    signInPromise = signIn(email)
  }
</script>

{#await signInPromise}
  Sending magic link to {email}
{:then { data, error }}
  <!--{error}-->
  {#if data}
    Successfully sent to {email}
  {:else}
    <Form on:submit={handleSignIn}>
      <BindableTextInput name="email" label="Email" bind:value={email} />
      <button type="submit">Send</button>
    </Form>
  {/if}
{/await}
