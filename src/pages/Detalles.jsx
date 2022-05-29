import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Detalles.css";

import { FlechaAtras } from "../assets/icons/Icons";
import imagenHamburguesa from "../assets/images/ComboGrandTastyDobleMediano.png";

const product = {
  nombre: "McCombo Grand Tasty Doble Mediano",
  precio: 890.0,
  imagen: imagenHamburguesa,
  descripcion:
    "Inigualable pan con semillas de sésamo, dos medallones de carne 100% vacuna, tres fetas de nuestro exclusivo Queso Cheddar, cebolla, lechuga y tomate frescos. Sumado a estos ingredientes la única e inigualable Salsa Tasty, un exclusivo sabor McDonald’s",
};

const Detalles = () => {
  const [cantidad, setCantidad] = useState(1);
  return (
    <div className="detalles">
      <Link
        to={"/catalogo"}
        style={{ maxWidth: "25px", marginTop: "45px", marginLeft: "2px" }}
        className="botonAtras"
      >
        <FlechaAtras style={{ color: "black" }} />
      </Link>
      <div className="nombre">
        <h1 style={{ textAlign: "left" }}>{product.nombre}</h1>
        <sub>$ {product.precio}</sub>
      </div>
      <img className="imagen" src={product.imagen} alt="img" />
      <p className="descripcion">{product.descripcion}</p>
      <div className="botonesCantidad">
        <button
          onClick={() => {
            cantidad > 1 ? setCantidad(cantidad - 1) : <></>;
          }}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          onClick={() => {
            cantidad < 5 ? setCantidad(cantidad + 1) : <></>;
          }}
        >
          +
        </button>
      </div>
      <Link to="/catalogo">
        <button className="botonAgregar">Añadir al Pedido</button>
      </Link>
    </div>
  );
};

export default Detalles;
