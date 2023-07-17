<script lang="ts">
    import '../app.css'
    import Login from "./Login.svelte";
    import LoadingBar from "$lib/LoadingBar.svelte";
    let isLogedIn = false
    const allowAccess = () => {
        isLogedIn = true
    }
</script>
<LoadingBar />
<Login on:loggedIn={allowAccess}/>
{#if isLogedIn}
<slot />
{/if}
