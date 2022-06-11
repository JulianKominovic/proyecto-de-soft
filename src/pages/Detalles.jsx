import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Detalles.css";

import { FlechaAtras } from "../assets/icons/Icons";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useCarrito from "../context/useCarrito";
import { useNavigate } from "react-router-dom";

const Detalles = () => {
  const [cantidad, setCantidad] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { addItem } = useCarrito();
  const navigate = useNavigate();

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
          <div className="nombre">
            <Link to={"/catalogo"} className="botonAtras">
              <FlechaAtras style={{ color: "black" }} />
            </Link>
            <div>
              <h1 style={{ textAlign: "right" }}>{product.name}</h1>
              <sub style={{ display: "block", textAlign: "right" }}>
                $ {product.price}
              </sub>
            </div>
          </div>
          <img className="imagen" src={product.image} alt="img" />
          <p className="descripcion">{product.description}</p>
          <div className="botonesCantidad">
            <button
              onClick={() => {
                cantidad > 1 && setCantidad((prev) => prev - 1);
              }}
            >
              -
            </button>
            <span>{cantidad}</span>
            <button
              onClick={() => {
                cantidad < 5 && setCantidad((prev) => prev + 1);
              }}
            >
              +
            </button>
          </div>

          <button
            className="botonAgregar"
            onClick={() => {
              addItem(product, cantidad);
              navigate("/catalogo", {
                replace: true,
              });
            }}
          >
            Añadir al Pedido
          </button>
        </div>
      )}
    </>
  );
};

export default Detalles;
