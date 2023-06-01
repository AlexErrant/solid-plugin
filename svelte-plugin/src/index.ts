import type { VoidComponent } from "solid-js"
import Counter from "./lib/Counter.svelte"

const Comp: VoidComponent<{
  i: number
  child: VoidComponent<{ i: number }>
}> = (props) => {
  let div = document.createElement("div")
  const counter = new Counter({
    target: div,
    props: {
      solidCount: props.i,
      child: props.child,
    },
  })
  return div
}

export default Comp
