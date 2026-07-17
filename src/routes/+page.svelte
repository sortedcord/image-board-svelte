<script lang="ts">
  let { data } = $props();
</script>

<a href="/">image-board</a>

{#each data.images as img}
  <a href="/{img}">
    <img src="/{img}" alt={img} />
  </a>
{/each}
