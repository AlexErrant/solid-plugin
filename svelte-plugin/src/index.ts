import { createEffect, type VoidComponent } from "solid-js"
import Counter from "./lib/Counter.svelte"

const Comp: VoidComponent<{
  i: number
  child: VoidComponent<{ i: number }>
}> = (props) => {
  let div = document.createElement("div")
  const counter = new Counter({
    target: div,
    props: {
      solidI: props.i,
      solidProps: props
    },
  })
  createEffect(() => {
    counter.$set({ solidI: props.i  })
  })
  return div
}

export default Comp
