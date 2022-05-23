import "./NavBar.css";

function NavBarButton({
  src = "src/resources/icons/enDesarrolloIcon",
  selected = false,
  nombre = "En desarrollo",
}) {
  return (
    <>
      <img
        className="icon"
        src={`${src}${selected ? "Selected" : ""}`}
        alt={nombre}
      />
      <p className="texto">
        {selected ? <b className="negrita">{nombre}</b> : nombre}
      </p>
    </>
  );
}

export default NavBarButton;
