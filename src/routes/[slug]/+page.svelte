<script lang="ts">
  import { goto } from '$app/navigation';

  let { data } = $props();

  function onkey(e: KeyboardEvent) {
    if (e.key === 'h' || e.key === 'H') {
      if (data.prev) goto('/' + data.prev);
    } else if (e.key === 'l' || e.key === 'L') {
      if (data.next) goto('/' + data.next);
    }
  }
</script>

<svelte:window onkeydown={onkey} />

<a href="/">image-board</a>

{#if data.prev}
  <a href="/{data.prev}">previous</a>
{/if}

{#if data.next}
  <a href="/{data.next}">next</a>
{/if}

<p>{data.image}</p>

<img src="/{data.image}" alt={data.image} />
