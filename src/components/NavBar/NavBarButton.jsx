import { useState } from "react";
import "./NavBar.css"

function NavBarButton({src="src/resources/icons/enDesarrolloIcon", selected=false, nombre="En desarrollo"}) {
    return(
        <div className="navBarButton">
            {
                selected ? (
                    <div>
                        <img className="icon" src={src+"Selected.png"} alt={nombre} />
                        <p><b>{nombre}</b></p>
                    </div> 
                ) : (
                    <div>
                       <img className="icon" src={src+".png"} alt={nombre} />
                        <p>{nombre}</p>
                    </div>
                )
            }
        </div>
    );
}


export default NavBarButton
