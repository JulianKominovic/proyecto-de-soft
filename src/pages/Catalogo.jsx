import React from "react";
import Card from "../components/CardProducto/CardProducto";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

import "./Catalogo.css";
import useCarrito from "../context/useCarrito";
import Local from "../components/Local/Local";
import useLocal from "../context/useLocal";

<link
  href="//db.onlinewebfonts.com/c/827d075b1538829cc0db75696e4d5fa2?family=Speedee"
  rel="stylesheet"
  type="text/css"
/>;

const filters = [
  "Promociones",
  "McCombos",
  "McOfertas",
  "Sandwiches & Snacks",
  "Cajita Feliz",
  "Acompañamientos",
  "Postres",
  "Bebidas Frias y Calientes",
  "Ensaladas",
  "Desayunos y Meriendas",
];

const Catalogo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [selectedFilter, setSelecterFiler] = useState("");
  const { getCarritoItems } = useCarrito();
  const { getLocal } = useLocal();

  const Filters = (e) => {
    setSelecterFiler(e);
    fetch(`http://localhost:4000/api/products/`)
      .then((response) => response.json())
      .then((response) => {
        const filtrado = response.filter((r) => r.tags == e);
        setProducts(filtrado);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/`)
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {" "}
      {isLoading ? (
        <h1 style={{ marginTop: "80px" }}>Cargando...</h1>
      ) : (
        <div className="catalogo">
          {/* titulo seccion */}
          <p className="titulo-pedidos">Pedidos</p>

          {/* Seccion elegir local*/}
          <section className="elegir-local">
            <Link to="/catalogo/elegirLocal">
              <button className="boton">Pedí y Retirá</button>
            </Link>

            {getLocal()?.length > 0 ? <Local direccion={getLocal()} /> : null}
          </section>

          {/* caja de filtros */}
          <section className="filtros">
            {filters.map((filter) => (
              <span
                className={`span-filtro ${
                  filter === selectedFilter ? "selected" : ""
                }`}
                key={filter}
                onClick={() => Filters(filter)}
              >
                {filter}
              </span>
            ))}
          </section>

          <hr className="linea-horizontal" />

          <section className="catalogo-cards">
            {products.map((product) => {
              return !getCarritoItems().some(
                (item) => item._id === product._id
              ) ? (
                <Card
                  key={product.name}
                  imagen={product.image}
                  precio={product.price}
                  nombre={product.name}
                  id={product._id}
                />
              ) : null;
            })}
          </section>

          {/* Boton Ver Carrito */}
          {getCarritoItems()?.length > 0 && getLocal()?.length > 0 ? (
            <Link to={"/carrito"} key={"Ver Carrito"}>
              <button className="boton-ver-carrito">Ver Carrito</button>
            </Link>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Catalogo;
