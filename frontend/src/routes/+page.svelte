<script lang="ts">
  import Header from "./Header.svelte";
  import Login from "./Login.svelte";

  export type Image = {
    id: number;
    path: string;
    tags: string[];
    favorites: number;
  };

  export type User = {
    id: number;
    username: string;
    favorite_images: number[];
  };

  let user: User = {
    id: 1,
    username: "sortedcord",
    favorite_images: [],
  };

  let { data }: { data: { images: Image[] } } = $props();

  // svelte-ignore state_referenced_locally
  let images = $state(data.images);

  let search_query = $state("");

  let filtered_images = $derived(
    images.filter((img) => img.tags.some((tag) => tag.includes(search_query))),
  );

  let favorites_count = $derived(
    filtered_images.reduce((acc, img) => acc + img.favorites, 0),
  );

  let result_count = $derived(filtered_images.length);
</script>

<Header />

<Login {user} />
<hr />
<p>Favorites: {favorites_count}</p>
<br />

<label for="search">Search</label>
<input type="text" name="search" bind:value={search_query} />

<p>Results: {result_count}</p>

<br />

{#each filtered_images as img}
  <img src="/{img.path}" alt="hello" />
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
