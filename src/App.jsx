import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hola {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <NavBar icons={["src/resources/icons/icon1", "src/resources/icons/icon2", "src/resources/icons/icon3", "src/resources/icons/icon4", "src/resources/icons/icon5"]} 
              nombres={["Home" , "Pedidos", "Ofertas", "Mis Cupones", "Más"]} />
      
    </div>
    
  );
}

export default App;
