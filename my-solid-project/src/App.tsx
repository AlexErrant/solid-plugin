import { createSignal, type Component } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  let [count, setCount] = createSignal(0)
  return (
    <div class={styles.App}>
      <button onClick={() => setCount(x => x + 1)}>Inc {count()}</button>
    </div>
  );
};

export default App;
