<script lang="ts">
    import { onMount } from "svelte"
    import { get_current_component } from "svelte/internal"

    const thisComponent = get_current_component()

    export let message = ""
    export let color

    const destroyComponent = () => {
        thisComponent.$destroy()
    }

    export const showAlert = () => {
        let modal:any = document.getElementById("modal")
        modal.showModal()
        setTimeout(() => {
            destroyComponent()
        }, message.length * 70)
    }

    onMount(() => {
        showAlert()
    })
    let colorClass = ""
    switch (color) {
      case "green":
        colorClass = "bg-success"
        break
      case "red":
        colorClass = "bg-error"
        break
      case "yellow":
        colorClass = "bg-warning"
        break
      case "blue":
        colorClass = "bg-info"
        break
    }
</script>

<dialog id="modal" class="modal">
  <form method="dialog" class="modal-box {colorClass}">
    <p class="py-4 text-white">{message}</p>
  </form>
  <form method="dialog" class="modal-backdrop">
    <button on:click={destroyComponent}>close</button>
  </form>
</dialog>


