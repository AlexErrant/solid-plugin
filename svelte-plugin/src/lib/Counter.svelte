<script lang="ts">
  import { type Accessor, type VoidComponent } from "solid-js"
  import { Dynamic } from "solid-js/web"
  import { onMount } from "svelte"

  export let solidI: number
  export let solidProps: {
    i: number
    child: VoidComponent<{ i: number }>
  }

  let count: number = 0
  const increment = () => {
    count += 1
  }
  let placeholder: HTMLDivElement
  onMount(() => {
    let dynamic = Dynamic({
      get component() {
        return solidProps.child
      },
      get i() {
        return solidProps.i + 2
      },
    }) as unknown as Accessor<Node> // https://github.com/solidjs/solid/issues/1763
    placeholder.replaceWith(dynamic())
  })
</script>

<button on:click={increment}>
  count is {count}
</button>

<div>
  solidI is {solidI}
</div>

<div>Plugin actually gives the child component `count+2`</div>
<div bind:this={placeholder} />
