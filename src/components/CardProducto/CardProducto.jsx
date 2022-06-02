import { Link } from "react-router-dom";
import "./CardProducto.css";

const CardProducto = ({ imagen, precio, descripcion }) => {
  return (
    <Link
      to={{ pathname: "/detalles", search: "id=62965f37a9f892b42b50e5ec" }}
      className="card"
    >
      <div className="card-precio">
        <p>{"$" + (precio - 1)}</p>
      </div>
      <img className="card-img" src={imagen} />
      <p className="card-descripcion">{descripcion}</p>
    </Link>
  );
};

export default CardProducto;
