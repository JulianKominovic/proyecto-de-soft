import React from "react";
import "./ElegirLocal.css";
import Local from "../Local/Local";
import { Link } from "react-router-dom";

const direcciones = [
  "Av. Tomás Espora 611, Adrogue",
  "Av. Hipólito Yrigoyen 132000, Adrogue",
  "Peatonal Laprida 177, Lomas",
  "Av. Hipólito Yrigoyen 4475, Lanus",
  "Av. Antártida Arg 703, Lomas",
];

export const ElegirLocal = () => {
  return (
    <section className="ElegirLocal">
      <h1>Lista de restaurantes</h1>

      {direcciones.map((item) => {
        return (
          <Link to={"/catalogo"} key={item}>
            <Local key={item} direccion={item} />
          </Link>
        );
      })}
    </section>
  );
};
