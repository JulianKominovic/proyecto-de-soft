import React from "react";
import "./ElegirLocal.css";

import Local from "../Local/Local";
import { Link } from "react-router-dom";
import useLocal from "../../context/useLocal";

const direcciones = [
  "Av. Tomás Espora 611, Adrogue",
  "Av. Hipólito Yrigoyen 132000, Adrogue",
  "Peatonal Laprida 177, Lomas",
  "Av. Hipólito Yrigoyen 4475, Lanus",
  "Av. Antártida Arg 703, Lomas",
  "Av. Hipólito Yrigoyen 7545, Banfield",
];

export const ElegirLocal = () => {
  const { setLocal } = useLocal();

  return (
    <section className="ElegirLocal">
      <h1>Lista de restaurantes</h1>
      {direcciones.map((item) => {
        return (
          <Link
            to={"/catalogo"}
            key={item}
            onClick={() => {
              setLocal(item);
            }}
          >
            <Local key={item} direccion={item} />
          </Link>
        );
      })}
    </section>
  );
};
