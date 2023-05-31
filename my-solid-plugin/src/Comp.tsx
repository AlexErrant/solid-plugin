import { VoidComponent } from "solid-js"

const Comp: VoidComponent<{ i: number }> = (props) => {
  return <h1>Hello world!!! {props.i} x</h1>
}

export default Comp
