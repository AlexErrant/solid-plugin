import {
  createSignal,
  type Component,
  createResource,
  VoidComponent,
} from "solid-js"
import styles from "./App.module.css"
import { Dynamic } from "solid-js/web"
import { script } from "./svelteScript"

// https://stackoverflow.com/a/57255653
async function toModule<T>(script: string) {
  const blob = new Blob([script], { type: "text/javascript" })
  const url = URL.createObjectURL(blob)
  const module = await import(/* @vite-ignore */ url)
  URL.revokeObjectURL(url) // GC objectURLs
  return module as T
}

const ChildComp: VoidComponent<{ i: number }> = (props) => {
  return <div>Child Comp, *2 prop is {props.i * 2}</div>
}

const App: Component = () => {
  const [count, setCount] = createSignal(0)
  const [plugin] = createResource(async () => {
    let encodedPlugin = await toModule<{
      default: VoidComponent<{ i: number; child: VoidComponent<{ i: number }> }>
    }>(script)
    return encodedPlugin.default
  })
  return (
    <div class={styles.App}>
      <button onClick={() => setCount((x) => x + 1)}>Inc {count()}</button>
      <Dynamic component={plugin()} i={count()} child={ChildComp} />
    </div>
  )
}

export default App
