import { useState } from "react";
import "./NavBar.css";
import NavBarButton from "./NavBarButton";

const icons = [
  "src/resources/icons/icon1",
  "src/resources/icons/icon2",
  "src/resources/icons/icon3",
  "src/resources/icons/icon4",
  "src/resources/icons/icon5",
];
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
