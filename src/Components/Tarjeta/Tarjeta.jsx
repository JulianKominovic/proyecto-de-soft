import React, { Component } from "react";
import '../../../src/Components/Tarjeta/tarjeta.css'

function Tarjetas({ titulo, imagen, alt }) {
  return (
    <div className="Tarjetas">
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <img src={imagen} alt={alt} />
              <h2 class="card_title">{titulo}</h2>
            </div>
          </li>
        </ul>
    </div>
  );
}

export default Tarjetas;
