import { useState } from "react";
import "./NavBar.css";
import NavBarButton from "./NavBarButton";

import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";

const icons = [icon1, icon2, icon3, icon4, icon5];
const nombre = ["Home", "Pedidos", "Ofertas", "Mis Cupones", "Más"];

function NavBar() {
  const [selectedValue, setSelected] = useState(0);

  return (
    <footer className="navBar">
      {nombre.map((item, index) => {
        return (
          <button
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
          </button>
        );
      })}
    </footer>
  );
}

export default NavBar;
