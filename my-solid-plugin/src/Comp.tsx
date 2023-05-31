import { Accessor, VoidComponent, createEffect, on } from "solid-js"

const Comp: VoidComponent<{ i: Accessor<number> }> = (props) => {
  createEffect(
    on(props.i, (v) => {
      console.log("inside `on`", v)
    })
  )
  return <h1>Hello world!!! {props.i} x</h1>
}

export default Comp
