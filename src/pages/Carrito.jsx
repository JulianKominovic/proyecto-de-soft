import React from "react";
import "./Carrito.css";
import { Link } from "react-router-dom";


const Carrito = () => {
	return (
		<>
			<Link className="boton-link" to={"/catalogo"} key={"Volver"}>
				<button className="boton-volver">Pedidos</button>
			</Link>
		</>
	);
};

export default Carrito;
