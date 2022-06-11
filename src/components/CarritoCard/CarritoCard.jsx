import React from "react";
import useCarrito from "../../context/useCarrito";
import "./CarritoCard.css";
const CarritoCard = ({ nombre, precio, desc, unidades, img, id }) => {
  const { removeItem } = useCarrito();
  return (
    <article className="carrito__card">
      <div className="carrito__card__details">
        <img src={img} alt={nombre} className="carrito__card__image" />
        <aside className="carrito__card__side">
          <h4>{nombre}</h4>
          <p>{desc}</p>
          <p>
            $ {precio} x {unidades} = $ {precio * unidades}
          </p>
        </aside>
      </div>
      <button
        className="carrito__delete__button"
        onClick={() => {
          removeItem(id);
        }}
      >
        Eliminar
      </button>
    </article>
  );
};

export default CarritoCard;
