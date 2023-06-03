export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = 'count is ' + counter
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

import { VoidComponent, createEffect } from "solid-js"

const Comp: VoidComponent<{
  i: number
  child: VoidComponent<{ i: number }>
}> = (props) => {
  let div = document.createElement("div")
  let button = document.createElement("button")
  setupCounter(button)
  let iDiv = document.createElement("div")
  createEffect(() => {
    iDiv.textContent = props.i.toString()
  })
  div.appendChild(iDiv)
  div.appendChild(button)
  div.appendChild(props.child({i: props.i}) as Node)
  return div
}

export default Comp
