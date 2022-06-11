import React from "react";
import "./Carrito.css";
import Card from "../components/CardProducto/CardProducto";

import { FlechaAtras } from "../assets/icons/Icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import context from "../context/Context";
import useCarrito from "../context/useCarrito";
import CarritoCard from "../components/CarritoCard/CarritoCard";

const Carrito = () => {
  const { getCarritoItems } = useCarrito();

  return (
    <>
      <section className="lista-carrito">
        <header className="carrito__header">
          <Link className="boton-link" to={"/catalogo"} key={"Volver"}>
            <FlechaAtras style={{ color: "black" }} />
          </Link>
          <h1 className="carrito_title">Carrito</h1>
        </header>
        {getCarritoItems().map((combo) => (
          <CarritoCard
            key={combo._id}
            nombre={combo.name}
            img={combo.image}
            precio={combo.price}
            desc={combo.description}
            unidades={combo.unidades}
            id={combo._id}
          />
        ))}
      </section>
      <div className="botones-inferiores">
        <Link to="/catalogo">
          <button className="boton-volver">Seguir pidiendo</button>
        </Link>
        <Link to="/pago">
          <button className="boton-pagar">Pagar</button>
        </Link>
      </div>
    </>
  );
};

export default Carrito;
