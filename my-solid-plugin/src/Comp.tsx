import { VoidComponent } from "solid-js"

const Comp: VoidComponent<{
  i: number
  child: VoidComponent<{ i: number }>
}> = (props) => {
  return (
    <>
      <h1>Hello world!!! {props.i} x</h1>
      <div>Comp intercepts and passes an incremented i to child prop</div>
      <props.child i={props.i + 1} />
    </>
  )
}

export default Comp
