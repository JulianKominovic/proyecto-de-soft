import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import "./Pago.css";

import { FlechaAtras } from "../assets/icons/Icons";

const direccion = "Direccion del local prueva 1234";

const carrito = [
  { product: { precio: 500, nombre: "hamburguesa 1" }, cantidad: 1 },
  { product: { precio: 250, nombre: "hamburguesa 2" }, cantidad: 3 },
  { product: { precio: 500, nombre: "hamburguesa 3" }, cantidad: 2 },
];

const Pago = () => {
  const precioTotal = carrito.reduce(
    (total, currentValue) =>
      (total = total + currentValue.cantidad * currentValue.product.precio),
    0
  );
  const redireccionar = useNavigate();

  const precioFormateado = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(precioTotal);

  return (
    <>
      <Link to={"/carrito"} className="botonAtras">
        <FlechaAtras style={{ color: "black" }} />
      </Link>

      <section className="resumenPedido">
        <h2>
          <b>Resumen pedido</b>
        </h2>
        <ul>
          <li>
            <p>
              <b>Direccion de retiro en local:</b>
            </p>
            <p>{direccion}</p>
          </li>
          <li>
            <p>
              <b>Total: </b>
            </p>
            <p>{precioFormateado}</p>
          </li>
        </ul>
      </section>
      <form className="formulario">
        <h2>
          <b>Datos de pago</b>
        </h2>
        <ul>
          <li>
            <input
              className="campo largo"
              type="text"
              placeholder="* Numero de tarjeta"
            />
          </li>
          <li className="tresCampos">
            <div className="fecha">
              <input className="campo " type="text" placeholder="* MM" />
              <span> / </span>
              <input className="campo " type="text" placeholder="* YY" />
            </div>
            <input className="campo corto" type="text" placeholder="* CVV" />
          </li>
          <li>
            <input
              className="campo largo"
              type="text"
              placeholder="* Nombre completo(Titular)"
            />
          </li>
          <li className="documento">
            <select className="desplegable">
              <option value="DNI">DNI</option>
              <option value="Cédula">Cédula</option>
              <option value="L.C.">L.C.</option>
              <option value="L.E.">L.E.</option>
              <option value="Otro">Otro</option>
            </select>
            <input
              className="campo medio"
              type="text"
              placeholder="* Documento(Titular)"
            />
          </li>

          <h2>
            <b>Datos retiro</b>
          </h2>
          <li>
            <input
              className="campo largo"
              type="text"
              placeholder="* Nombre completo(Para retirar)"
            />
          </li>
          <li>
            <input
              className="campo largo"
              type="text"
              placeholder="* Documento(Para retirar)"
            />
          </li>
        </ul>
      </form>
      <button
        className="botonSubmit"
        onClick={() => {
          swal(
            "Pago realizado correctamente",
            `Se podrá retirar el pedido en:\n${direccion}`,
            "success",
            {
              button: {
                text: "Volver a Home",
                value: redireccionar("/"),
                className: "botonVolver",
              },
            }
          );
        }}
      >
        Finalizar pedido
      </button>
    </>
  );
};

export default Pago;