<script lang="ts">
  export let label
  export let name
  export let value = ''
</script>

<section>
  <label for={name}>{label}</label>
  <input id={name} {name} type="date" bind:value />
</section>

<style>
  section {
    margin: 10px;
  }
</style>
