import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Detalles.css";

import { FlechaAtras } from "../assets/icons/Icons";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Detalles = () => {
  const [cantidad, setCantidad] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <h1 style={{ marginTop: "80px" }}>Cargando...</h1>
      ) : (
        <div className="detalles">
          <Link
            to={"/catalogo"}
            style={{ maxWidth: "25px", marginTop: "45px", marginLeft: "2px" }}
            className="botonAtras"
          >
            <FlechaAtras style={{ color: "black" }} />
          </Link>
          <div className="nombre">
            <h1 style={{ textAlign: "left" }}>{product.name}</h1>
            <sub>$ {product.price}</sub>
          </div>
          <img className="imagen" src={product.image} alt="img" />
          <p className="descripcion">{product.description}</p>
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
      )}
    </>
  );
};

export default Detalles;
