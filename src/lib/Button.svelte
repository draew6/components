<script lang="ts">
    import type {Writable} from 'svelte/store'
    type tailwindNumbers = null | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96

    export let text = ''
    export let isLoading = false
    export let loadStore: Writable<boolean> | null = null
    export let handler: Function
    export let additionClass = ''
    export let color = 'btn-primary'

    export let width: tailwindNumbers = null
    
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
        isLoading = false
        if (loadStore) loadStore.set(false)
    }


</script>

<button
    class="btn {color} {additionClass} {width === null ? '' : 'w-' + width}"
    on:click={handle}
    >
        <span class:spin={isLoading}></span>
        {text}
</button>

<style>
    .spin {
        @apply loading loading-spinner;
    }
</style>