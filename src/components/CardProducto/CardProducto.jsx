import { Link } from "react-router-dom";
import "./CardProducto.css";

const CardProducto = ({ imagen, precio, nombre, id }) => {
  return (
    <Link to={{ pathname: "/detalles", search: `id=${id}` }} className="card">
      <img loading="lazy" decoding="async" className="card-img" src={imagen} />

      <footer className="card-nombre">
        {nombre}
        <p>{"$" + (precio - 1)}</p>
      </footer>
    </Link>
  );
};

export default CardProducto;
