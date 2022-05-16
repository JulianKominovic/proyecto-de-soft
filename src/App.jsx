import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hola {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default App;
