import React from "react";

const Card = ({ imagen, precio, descripcion }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				margin: "1rem auto 1rem",
				width: "212px",
				borderRadius: "5%",
				outline: "1px solid",
			}}
		>
			<p
				style={{
					position: "absolute",
					outline: "1px solid",
					margin: "100% 0",
				}}
			>
				{precio}
			</p>
			<img
				src={imagen}
				style={{
					margin: "0",
					boxShadow: "0 2px 5px 0 rgba(0,0,0,.25)",
					borderRadius: "5%",
					outline: "1px solid",
				}}
			/>
			<p style={{ margin: "5px", fontWeight: "400" }}>{descripcion}</p>
		</div>
	);
};

export default Card;
