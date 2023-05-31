import { createSignal, type Component, createResource } from "solid-js"
import styles from "./App.module.css"
import { Dynamic } from "solid-js/web"

// https://stackoverflow.com/a/57255653
async function toModule<T>(script: string) {
  const blob = new Blob([script], { type: "text/javascript" })
  const url = URL.createObjectURL(blob)
  const module = await import(/* @vite-ignore */ url)
  URL.revokeObjectURL(url) // GC objectURLs
  return module as T
}

const App: Component = () => {
  const [count, setCount] = createSignal(0)
  const [plugin] = createResource(async () => {
    const script = `function template(html, check, isSVG) {
  const t = document.createElement("template");
  t.innerHTML = html;
  let node = t.content.firstChild;
  if (isSVG) node = node.firstChild;
  return node;
}

const _tmpl$ = /*#__PURE__*/template(\`<h1>Hello world!!!</h1>\`);
const Comp = (() => {
  return _tmpl$.cloneNode(true);
});

export { Comp as default };
`
    let encodedPlugin = await toModule<{
      default: Component
    }>(script)
    return encodedPlugin.default
  })
  return (
    <div class={styles.App}>
      <button onClick={() => setCount((x) => x + 1)}>Inc {count()}</button>
      <Dynamic component={plugin()} />
    </div>
  )
}

export default App
