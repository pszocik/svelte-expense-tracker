<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let formEl: HTMLFormElement
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

  export const reset = (): void => {
    formEl.reset()
  }
</script>

<form on:submit|preventDefault={onSubmit} bind:this={formEl}>
  <slot />
</form>

<style>
  Form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
</style>
