import React from "react";
import Card from "../components/CardProducto/CardProducto";
import cuadruBaconM from "../assets/images/ComboCuadrupleBaconMediano.jpg";
import cuadruBaconG from "../assets/images/ComboCuadrupleBaconGrande.jpg";
import grandTastyDobleM from "../assets/images/ComboGrandTastyDobleMediano.png";
import grandTastyTripleM from "../assets/images/ComboGrandTastyTripleMediano.png";
import "./Catalogo.css"


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
    <div className="catalogo">
      {/* titulo seccion */}
      <p className="titulo-pedidos">Pedidos</p>

      {/* caja de filtros */}
      <section className="filtros">
        {filters.map((filter) => (
          <span className="span-filtro" key={filter}>{filter}</span>
        ))}
      </section>

      <hr className="linea-horizontal" />

      <div><p className="titulo-filtro">McCombos</p></div>

      {/* Cards */}
      <section className="catalogo-cards">
        {combos.map((combo) => (
          <Card
            key={combo.descripcion}
            imagen={combo.imagen}
            precio={combo.precio}
            descripcion={combo.descripcion}
          />
        ))}
      </section>

      <button className="boton-agregar-carrito">Agregar al Carrito</button>
    </div>
  );
};

export default Catalogo;
