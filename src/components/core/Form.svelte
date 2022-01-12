<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const onSubmit = (e: SubmitEvent): void => {
    const formData = new FormData(<HTMLFormElement>e.target)
    const data: { [inputName: string]: string } = {}

    for (let field of formData) {
      const [key, value] = field
      data[key] = <string>value
    }

    dispatch('submit', {
      data: data
    })
  }

  const onReset = () => {
    dispatch('reset')
  }
</script>

<form on:submit|preventDefault={onSubmit} on:reset|preventDefault={onReset}>
  <slot />
</form>

<style>
  Form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
</style>
