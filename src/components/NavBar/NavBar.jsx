import { useState } from "react";
import "./NavBar.css"
import NavBarButton from "./NavBarButton";


function NavBar({icons, nombres}) {
    const [selectedValue, setSelected] = useState([false,false,false,false,false])
    return(
        <footer className="navBar">
            <button className="boton" onClick={() =>{setSelected([true,false,false,false,false])}}>
                <NavBarButton src={icons[0]} selected={selectedValue[0]} nombre={nombres[0]} />
            </button>
            <button className="boton" onClick={() =>{setSelected([false,true,false,false,false])}}>
                <NavBarButton src={icons[1]} selected={selectedValue[1]} nombre={nombres[1]} />
            </button>
            <button className="boton" onClick={() =>{setSelected([false,false,true,false,false])}}>
                <NavBarButton src={icons[2]} selected={selectedValue[2]} nombre={nombres[2]} />
            </button>
            <button className="boton" onClick={() =>{setSelected([false,false,false,true,false])}}>
                <NavBarButton src={icons[3]} selected={selectedValue[3]} nombre={nombres[3]} />
            </button>
            <button className="boton" onClick={() =>{setSelected([false,false,false,false,true])}}>
                <NavBarButton src={icons[4]} selected={selectedValue[4]} nombre={nombres[4]} />
            </button>
        </footer>
    );
}

export default NavBar