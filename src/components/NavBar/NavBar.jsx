import { useState } from "react";
import "./NavBar.css";
import NavBarButton from "./NavBarButton";

import { McDonalds } from "../../assets/icons/Icons";
import { PapasFritas } from "../../assets/icons/Icons";
import { Tag } from "../../assets/icons/Icons";
import { Cupon } from "../../assets/icons/Icons";
import { Puntos } from "../../assets/icons/Icons";

import { Link } from "react-router-dom";

const direccion = ["/", "/catalogo", "/", "/", "/"];
const boton = [
  { Icon: McDonalds, nombre: "Home" },
  { Icon: PapasFritas, nombre: "Pedidos" },
  { Icon: Tag, nombre: "Ofertas" },
  { Icon: Cupon, nombre: "Mis Cupones" },
  { Icon: Puntos, nombre: "Más" },
];

function NavBar() {
  const [selectedValue, setSelected] = useState(0);
  return (
    <footer className="navBar">
      {boton.map((item, index) => {
        return (
          <Link
            to={direccion[index]}
            className="navBarButton"
            key={item.nombre}
            onClick={() => {
              setSelected(index);
            }}
          >
            <NavBarButton boton={item} selected={index === selectedValue} />
          </Link>
        );
      })}
    </footer>
  );
}

export default NavBar;
