import "./CardProducto.css";

const CardProducto = ({ imagen, precio, descripcion, unidades}) => {
  return (
    <div className="card-producto">

      <div className="card-precio">
        <p>{"$" + (precio - 1)}</p>
      </div>

      <img className="card-img" src={imagen} />

      <p className="card-descripcion">{descripcion}</p>

      <p>{unidades}</p>

    </div>
  );
};

export default CardProducto;
