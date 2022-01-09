<script lang="ts">
  export let label
  export let name
  export let value = ''
</script>

<label for={name}>{label}</label>
<input id={name} {name} type="date" bind:value />
