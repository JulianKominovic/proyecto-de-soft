import { useState } from "react";
import Tarjeta from "./components/Tarjeta/Tarjeta";

var pediYRetira = "src/Assets/PediYRetira.jpg";
var mcDelivery = "src/Assets/McDelivery.png";
var ofertas = "src/Assets/OfertasEspeciales.png";
var cupon = "src/Assets/Promo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Tarjeta
        titulo={"Un McDonald's en tu mano"}
        imagen={pediYRetira}
        alt={"Pedí y retirá"}
      />
      <Tarjeta
        titulo={"Pedí, nosotros te lo llevamos"}
        imagen={mcDelivery}
        alt={"McDelivery"}
      />
      <Tarjeta 
        titulo={"Ofertas especiales"} 
        imagen={ofertas} 
        alt={"Ofertas"} 
      />
      <Tarjeta 
        titulo={"Cupones"} 
        imagen={cupon} 
        alt={"Cupones"} 
      />
    </div>
  );
}

export default App;
