// this is the result of `pnpm build` in `../ts-plugin`

export const script = `import { createEffect } from 'solid-js';

function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = "count is " + counter;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
const Comp = (props) => {
  let div = document.createElement("div");
  let button = document.createElement("button");
  setupCounter(button);
  let iDiv = document.createElement("div");
  createEffect(() => {
    iDiv.textContent = props.i.toString();
  });
  div.appendChild(iDiv);
  div.appendChild(button);
  div.appendChild(props.child({ i: props.i }));
  return div;
};

export { Comp as default, setupCounter };
`