import "./App.css";
import Card from "./Components/Card";

function App() {
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

	var cuadruBaconM = "src/Assets/ComboCuadrupleBaconMediano.jpg";
	var cuadruBaconG = "src/Assets/ComboCuadrupleBaconGrande.jpg";
	var grandTastyDobleM = "src/Assets/ComboGrandTastyDobleMediano.png";
	var grandTastyTripleM = "src/Assets/ComboGrandTastyTripleMediano.png";

	return (
		<div className="App">
			<section //logo mcdonald's
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					padding: "5px 0",
					position: "fixed",
					background: "#d8070f",
					width: "100%",
					boxShadow: "0 -5px 5px 6px rgba(0,0,0,.5)",
				}}
			>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg"
					alt="mc-logo"
					title="Me Encanta"
					width={"30px"}
				/>
			</section>

			<p //titulo seccion
				style={{
					placeSelf: "start",
					margin: "50px 0 10px 1rem",
					fontWeight: "800",
				}}
			>
				Pedidos
			</p>

			<section //caja de filtros
				style={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					margin: "0px 1rem",
					justifyContent: "center",
					fontSize: "12px",
				}}
			>
				{filters.map(
					(
						filter //cada filtro
					) => (
						<span
							style={{
								padding: "3px 7px",
								fontWeight: "500",
							}}
						>
							{filter}
						</span>
					)
				)}
			</section>

			<section //linea horizontal
				style={{
					width: "80%",
					height: "1px",
					margin: "1rem auto 0",
					backgroundColor: "rgb(200,200,200)",
				}}
			/>

			<section // CARDS
				style={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "column",
					justifyContent: "center",
					margin: "1rem 1rem",
					fontSize: "22px",
					fontWeight: "400",
				}}
			>
				<p //titulo del filtro
					style={{
						margin: "0",
						fontWeight: "700",
					}}
				>
					McCombos
				</p>

				<Card
					imagen={cuadruBaconM}
					precio={"500"}
					descripcion={"McCombo Mediano Cuadruple Bacon"}
				/>
				<Card
					imagen={cuadruBaconG}
					descripcion={"McCombo Grande Cuadruple Bacon"}
				/>
				<Card
					imagen={grandTastyDobleM}
					descripcion={"McCombo Mediano Grand Tasty Doble"}
				/>
				<Card
					imagen={grandTastyTripleM}
					descripcion={"McCombo Mediano Grand Tasty Triple"}
				/>
			</section>
		</div>
	);
}

export default App;
