import { useState } from "react";
import "./NavBar.css";
import NavBarButton from "./NavBarButton";

import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import { Link } from "react-router-dom";

const icons = [icon1, icon2, icon3, icon4, icon5];
const nombre = ["Home", "Pedidos", "Ofertas", "Mis Cupones", "Más"];
const direccion = ["/", "/catalogo", "/", "/", "/"];

function NavBar() {
  const [selectedValue, setSelected] = useState(0);

  return (
    <footer className="navBar">
      {nombre.map((item, index) => {
        return (
          <Link
            to={direccion[index]}
            className="navBarButton"
            key={item}
            onClick={() => {
              setSelected(index);
            }}
          >
            <NavBarButton
              src={icons[index]}
              selected={index === selectedValue}
              nombre={item}
            />
          </Link>
        );
      })}
    </footer>
  );
}

export default NavBar;
