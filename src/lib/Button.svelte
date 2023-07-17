<script lang="ts">
    import type {Writable} from 'svelte/store'

    export let text = ''
    export let isLoading = false
    export let loadStore: Writable<boolean> | null = null
    export let handler: Function
    export let additionClass = ''
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
    class="btn {color} {additionClass}"
    on:click={isLoading ? () => {} : handle}
    >{#if isLoading}
        <span class:spin={isLoading}></span>
    {:else}
        {text}
    {/if}
</button>
<style>
    .spin {
        @apply loading loading-spinner;
    }
</style>