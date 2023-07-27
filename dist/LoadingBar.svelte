<script>export let loadStore;
</script>
<div class="flex items-center justify-center h-2">
    {#if $loadStore}
        <progress class="progress progress-primary w-80 mx-auto"></progress>
    {/if}
</div>
