import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Detalles from "./pages/Detalles";
import Pago from "./pages/Pago";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <div className="App">
      {/* logo mcdonald's */}
      <section className="logo-container">
        <img
          className="img-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg"
          alt="mc-logo"
          title="Me Encanta"
        />
      </section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/detalles" element={<Detalles />} />
          <Route path="/pago" element={<Pago />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}
export default App;
