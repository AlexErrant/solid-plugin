<script lang="ts">
  import type { VoidComponent } from "solid-js"
  import { onMount } from "svelte"

  export let solidCount: number
  export let child: VoidComponent<{ i: number }>

  let count: number = 0
  const increment = () => {
    count += 1
  }
  let container: HTMLDivElement
  onMount(() => {
    container.appendChild(child({ i: solidCount + 1 }) as Node)
  })
</script>

<button on:click={increment}>
  count is {count}
</button>

<div>
  solidCount is {solidCount}
</div>

<div>
  Actually incremented is
</div>
<div bind:this={container} />
