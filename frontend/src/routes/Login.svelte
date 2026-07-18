<script lang="ts">
  let { user } = $props();

  let status: "LOGGED IN" | "LOGGED OUT" = $state("LOGGED OUT");

  function account() {
    status = status === "LOGGED IN" ? "LOGGED OUT" : "LOGGED IN";
  }
</script>

<p>Hi {user.username}</p>

<input type="text" bind:value={user.username} />

<button onclick={account}>{status}</button>
