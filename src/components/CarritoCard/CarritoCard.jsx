import React from "react";
import useCarrito from "../../context/useCarrito";
import { useState } from "react";
import "./CarritoCard.css";
const CarritoCard = ({ nombre, precio, desc, unidades, img, id }) => {
	const { removeItem, getCarritoItems, cambiarCantidadItem } = useCarrito();
	const [editando, setEditando] = useState(false);

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

			<div className="box__eliminar__editar">
				{/* eliminar */}
				<button
					className="carrito__delete__button"
					onClick={() => {
						removeItem(id);
					}}
				>
					Eliminar
				</button>

				{/* editar */}
				<button
					className="carrito__editar__button"
					onClick={() => {
						setEditando(true);
					}}
				>
					{editando ? (
						<div className="div-botonesCantidad">
							<div className="botonesCantidad">
								<button
									onClick={() => {
										unidades > 1 &&
											cambiarCantidadItem(
												id,
												unidades - 1
											);
									}}
								>
									-
								</button>

								<span>{unidades}</span>

								<button
									onClick={() => {
										unidades < 5 &&
											cambiarCantidadItem(
												id,
												unidades + 1
											);
									}}
								>
									+
								</button>
							</div>
							<button
								onClick={(e) => {
									e.stopPropagation();
									setEditando(false);
								}}
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									class="feather feather-check"
								>
									<polyline points="20 6 9 17 4 12" />
								</svg>
							</button>
						</div>
					) : (
						"Editar"
					)}
				</button>
			</div>
		</article>
	);
};

export default CarritoCard;
