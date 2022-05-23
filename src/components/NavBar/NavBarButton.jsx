import "./NavBar.css";

function NavBarButton({ boton, selected = false }) {
  return (
    <>
      <boton.Icon
        className="icon"
        style={{
          color: `${selected ? "rgb(255 199 44)" : "grey"}`,
        }}
      />
      <p className="texto">
        {selected ? <b className="negrita">{boton.nombre}</b> : boton.nombre}
      </p>
    </>
  );
}

export default NavBarButton;
