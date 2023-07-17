<script lang="ts">
    import Portal from "svelte-portal/src/Portal.svelte"
    import { onMount } from "svelte"
    
    let visible = false
    export const showAlert = () => {
        visible = true
        setTimeout(() => {
            visible = false
        }, 7000)
    }
    export let message = ""
    export let color
    onMount(() => {
        showAlert()
    })
    let colorClass = ""
    switch (color) {
      case "green":
        colorClass = "alert-success"
        break
      case "red":
        colorClass = "alert-error"
        break
      case "yellow":
        colorClass = "alert-warning"
        break
      case "blue":
        colorClass = "alert-info"
        break
    }
</script>

<Portal target="body">
  {#if visible}
  <div class="fixed inset-0 flex items-center justify-center">
    <div class="alert {colorClass} shadow-lg w-48">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{message}</span>
        </div>
      </div>
  </div>
  {/if}
</Portal>