import { Owner, VoidComponent, createEffect, runWithOwner } from "solid-js"

const Comp: VoidComponent<{ i: number; owner: Owner }> = (props) => {
  runWithOwner(props.owner, () => {
    createEffect(() => {
      console.log("inside run with owner", props.i)
    })
  })
  return <h1>Hello world!!! {props.i} x</h1>
}

export default Comp
