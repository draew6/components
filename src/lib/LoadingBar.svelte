<script>
    import { loadingState } from "./stores";
</script>
{#if $loadingState}
<div class="flex items-center justify-center">
    <progress class="progress progress-primary w-80 mx-auto"></progress>
</div>
{/if}