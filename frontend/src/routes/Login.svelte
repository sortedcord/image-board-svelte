<script lang="ts">
    let name: string = $state('Sorted');

    let status: 'LOGGED IN' | 'LOGGED OUT' = $state('LOGGED OUT');

    function account() {
        status = status === "LOGGED IN" ? "LOGGED OUT" :"LOGGED IN";
    }
</script>

<p>Hi {name}</p>

<input type="text" bind:value={name} />

<button onclick={account}>{status}</button>