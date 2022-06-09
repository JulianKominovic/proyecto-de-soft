import React from "react";
import Card from "../components/CardProducto/CardProducto";
import cuadruBaconM from "../assets/images/ComboCuadrupleBaconMediano.jpg";
import cuadruBaconG from "../assets/images/ComboCuadrupleBaconGrande.jpg";
import grandTastyDobleM from "../assets/images/ComboGrandTastyDobleMediano.png";
import grandTastyTripleM from "../assets/images/ComboGrandTastyTripleMediano.png";
import { Link } from "react-router-dom";

const filters = [
  "Promociones",
  "McCombos",
  "McOfertas",
  "Sandwiches & Snacks",
  "Cajita Feliz",
  "Acompañamientos",
  "Postres",
  "Bebidas Frias y Calientes",
  "Ensaladas",
  "Desayunos y Meriendas",
];

const combos = [
  {
    imagen: cuadruBaconM,
    precio: "500",
    descripcion: "McCombo Mediano Cuadruple Bacon",
  },
  {
    imagen: cuadruBaconG,
    precio: "500",
    descripcion: "McCombo Grande Cuadruple Bacon",
  },
  {
    imagen: grandTastyDobleM,
    precio: "500",
    descripcion: "McCombo Mediano Grand Tasty Doble",
  },
  {
    imagen: grandTastyTripleM,
    precio: "500",
    descripcion: "McCombo Mediano Grand Tasty Triple",
  },
];

const Catalogo = () => {
  return (
    <>
      {/* titulo seccion */}
      <p className="titulo">Pedidos</p>

      {/* Seccion elegir local*/}
      <h2>Pedidos</h2>
      <Link to="/catalogo/elegirLocal">Elegir Local</Link>


      {/* caja de filtros */}
      <section className="filtros">
        {filters.map((filter) => (
          <span key={filter}>{filter}</span>
        ))}
      </section>

      <hr className="linea-horizontal" />

      {/* Cards */}
      <section className="cards">
        <p>McCombos</p>
        {combos.map((combo) => (
          <Card
            key={combo.descripcion}
            imagen={combo.imagen}
            precio={combo.precio}
            descripcion={combo.descripcion}
          />
        ))}
      </section>
    </>
  );
};

export default Catalogo;
