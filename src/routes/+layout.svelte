<script lang="ts">
    import '../app.css'

    import LoadingBar from '$lib/LoadingBar.svelte';
    import Login from '$lib/Login.svelte';
    import { writable } from "svelte/store";
    const loadStore = writable(false);

    let isLogedIn = false
    const allowAccess = () => {
        isLogedIn = true
    }
</script>
<LoadingBar {loadStore} />
<Login on:loggedIn={allowAccess} {loadStore} autologin={async () => await console.log("autologin")} login={async () => true}/>
{#if isLogedIn}
    <slot />
{/if}
