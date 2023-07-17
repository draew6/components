<script lang="ts">
    export let handler: Function
    export let text = ''

    import {loadingState} from './stores'

    let loading = false

    const load = async () => {
        loading = true
        loadingState.set(true)
        await handler()
        loading = false
        loadingState.set(false)
    }
</script>
<div
    class="flex justify-around mt-4"
    >
        <button on:click={load} class="btn">
            {#if loading}
            <span class:loading={"loading loading-spinner"}></span>
            {/if}
            {text}
        </button>
</div>