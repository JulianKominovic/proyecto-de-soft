import React from "react";
import "./tarjeta.css";

function Tarjeta({ titulo, imagen, alt }) {
  return (
    <div className="Tarjetas">
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <img src={imagen} alt={alt} />
            <h2 className="card_title">{titulo}</h2>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Tarjeta;
