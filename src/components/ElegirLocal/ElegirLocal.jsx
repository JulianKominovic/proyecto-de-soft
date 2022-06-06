import React from "react";
import "./ElegirLocal.css";

import Local from "../Local/Local";

export const ElegirLocal = () => {
  return (
    <section className="ElegirLocal">

      <h1>Lista de restaurantes</h1>

      <Local direccion={"Av. Tomás Espora 611, Adrogue"}/>
      <Local direccion={"Av. Hipólito Yrigoyen 132000, Adrogue"}/>
      <Local direccion={"Peatonal Laprida 177, Lomas"}/>
      <Local direccion={"Av. Hipólito Yrigoyen 4475, Lanus"}/>
      <Local direccion={"Av. Antártida Arg 703, Lomas"}/>
      
    </section>
  );
};