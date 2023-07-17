<script lang="ts">
  import {onMount} from "svelte";
  import {loadingState} from "$lib/stores";

  loadingState.set(true)


  const handler = async () => {
    loadingState.set(true)
    loadingState.set(false)
  }


  onMount( async () => {
    document.addEventListener('visibilitychange', async () => await handler())
  })

</script>
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>