import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import "./Pago.css";

import { FlechaAtras } from "../assets/icons/Icons";
import useCarrito from "../context/useCarrito";
import useLocal from "../context/useLocal";

const Pago = () => {
  const { getCarritoItems } = useCarrito();
  const { getLocal } = useLocal();
  const redireccionar = useNavigate();

  const precioTotal = getCarritoItems().reduce(
    (total, currentValue) =>
      (total = total + currentValue.unidades * currentValue.price),
    0
  );

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
            {getLocal()}
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
              className="campo largo ultimo"
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
            `Se podrá retirar el pedido en:\n${getLocal()}`,
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
