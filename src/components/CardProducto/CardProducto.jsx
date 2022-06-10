import { Link } from "react-router-dom";
import "./CardProducto.css";

const CardProducto = ({ imagen, precio, nombre, id }) => {
  return (
    <Link to={{ pathname: "/detalles", search: `id=${id}` }} className="card">
      <div className="card-precio">
        <p>{"$" + (precio - 1)}</p>
      </div>

      <img className="card-img" src={imagen} />

      <p className="card-nombre">{nombre}</p>
    </Link>
  );
};

export default CardProducto;
