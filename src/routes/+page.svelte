<script lang="ts">
  import Button from '$lib/Button.svelte'
</script>
<Button handler={()=> console.log("triggered!")} width={56}/>
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>