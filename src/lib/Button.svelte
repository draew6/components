<script lang="ts">
    import type {Writable} from 'svelte/store'

    export let text = ''
    export let isLoading = false
    export let loadStore: Writable<boolean> | null = null
    export let handler: Function
    export let additionalClass = ''
    export let color = 'btn-primary'
    
    switch (color) {
        case 'green':
            color = 'btn-success'
            break
        case 'red':
            color = 'btn-error'
            break
        case 'yellow':
            color = 'btn-warning'
            break
        case 'blue':
            color = 'btn-info'
            break
    }



    const handle = async () => {
        isLoading = true
        if (loadStore) loadStore.set(true)
        await handler()
        if (loadStore) loadStore.set(false)
        isLoading = false
    }

</script>
<button
    class="btn {color} {additionalClass}"
    on:click={isLoading ? () => {} : handle}
    >{#if isLoading}
        <span class="loading loading-spinner"></span>
    {:else}
        {text}
    {/if}
</button>