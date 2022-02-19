// import {Counter, Greet} from './svelte-elements';
// customElements.define('svelte-greet', Greet);
// customElements.define('svelte-counter', Counter);
import './svelte-elements';

function App() {
  return (
    <>
      <svelte-greet name="Mark" />
      <svelte-counter />
    </>
  );
}

export default App;
