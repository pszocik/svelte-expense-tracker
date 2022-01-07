<script lang="ts">
  export let label
  export let name
  export let value = undefined
</script>

<label for={name}>{label}</label>
<select id={name} {name} bind:value>
  <slot />
</select>
