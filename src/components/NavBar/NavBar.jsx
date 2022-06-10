import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import NavBarButton from "./NavBarButton";
import "./NavBar.css";

import { McDonalds } from "../../assets/icons/Icons";
import { PapasFritas } from "../../assets/icons/Icons";

const boton = [
  { Icon: McDonalds, nombre: "Home", direccion: "/" },
  { Icon: PapasFritas, nombre: "Pedidos", direccion: "/catalogo" },
];

function NavBar() {
  const [url, setUrl] = useState("");
  const location = useLocation();

  useEffect(() => {
    setUrl(new URL(window.location.href).pathname);
  }, [location]);

  return (
    <footer className="navBar">
      {boton.map((item, index) => {
        return (
          <Link
            to={item.direccion}
            className="navBarButton"
            key={item.nombre}
            // onClick={() => {
            //   setSelected(index);
            // }}
          >
            <NavBarButton boton={item} selected={url === item.direccion} />
          </Link>
        );
      })}
    </footer>
  );
}

export default NavBar;
