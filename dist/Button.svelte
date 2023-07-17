<script>export let text = "";
export let isLoading = false;
export let loadStore = null;
export let handler;
export let additionClass = "";
export let color = "btn-primary";
export let width = null;
switch (color) {
  case "green":
    color = "btn-success";
    break;
  case "red":
    color = "btn-error";
    break;
  case "yellow":
    color = "btn-warning";
    break;
  case "blue":
    color = "btn-info";
    break;
}
const handle = async () => {
  isLoading = true;
  if (loadStore)
    loadStore.set(true);
  await handler();
  isLoading = false;
  if (loadStore)
    loadStore.set(false);
};
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