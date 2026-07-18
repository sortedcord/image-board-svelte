<script lang="ts">
  import Header from "./Header.svelte";
  import Login from "./Login.svelte";

  let { data } = $props();

  // svelte-ignore state_referenced_locally
  let images = $state(data.images);

  let favorites_count = $derived(
    images.reduce((sum, img) => sum + img.favorites, 0),
  );
</script>

<Header />

<Login />
<hr />
<p>Favorites: {favorites_count}</p>
<br />
{#each images as img}
  <img src="/{img.src}" alt="hello" />
  <button
    onclick={() => {
      if (img.favorites === 1) {
        img.favorites = 0;
      } else {
        img.favorites = 1;
      }
    }}>Mark Favorite {img.favorites}</button
  >
{/each}
