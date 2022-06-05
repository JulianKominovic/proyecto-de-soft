import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Detalles from "./pages/Detalles";
import Pago from "./pages/Pago";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section //logo mcdonald's
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "5px 0",
          position: "fixed",
          background: "#d8070f",
          width: "100%",
          boxShadow: "0 -5px 5px 6px rgba(0,0,0,.5)",
          zIndex: "3",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg"
          alt="mc-logo"
          title="Me Encanta"
          width={"30px"}
        />
      </section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/detalles" element={<Detalles />} />
          <Route path="/pago" element={<Pago />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
