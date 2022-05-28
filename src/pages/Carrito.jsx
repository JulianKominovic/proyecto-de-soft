import React from "react";
import "./Carrito.css";
import Card from "../components/CardProducto/CardProducto";
import cuadruBaconM from "../assets/images/ComboCuadrupleBaconMediano.jpg";
import cuadruBaconG from "../assets/images/ComboCuadrupleBaconGrande.jpg";
import grandTastyDobleM from "../assets/images/ComboGrandTastyDobleMediano.png";
import grandTastyTripleM from "../assets/images/ComboGrandTastyTripleMediano.png";
import { Link } from "react-router-dom";

const combos = [
	{
		imagen: cuadruBaconM,
		precio: 500,
		descripcion: "McCombo Mediano Cuadruple Bacon",
		cantidad: 2
	},
	{
		imagen: cuadruBaconG,
		precio: 500,
		descripcion: "McCombo Grande Cuadruple Bacon",
		cantidad: 1
	},
	{
		imagen: grandTastyDobleM,
		precio: 500,
		descripcion: "McCombo Mediano Grand Tasty Doble",
		cantidad: 3
	},
	{
		imagen: grandTastyTripleM,
		precio: 500,
		descripcion: "McCombo Mediano Grand Tasty Triple",
		cantidad: 1
	},
];

const Carrito = () => {
	return (
		<>
			<Link className="boton-link" to={"/catalogo"} key={"Volver"}>
				<button className="boton-volver">Atrás</button>
			</Link>
			<section className="lista-carrito">
				{combos.map((combo) => (
					<Card
						key={combo.descripcion}
						imagen={combo.imagen}
						precio={combo.precio}
						descripcion={combo.descripcion}
						id={combo.id}
						unidades={"Cantidad: " + combo.cantidad}
					/>
				))}
			</section>
		</>
	);
};

export default Carrito;
