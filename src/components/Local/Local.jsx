import React from "react";
import "./Local.css";

import LogoLocal from "../../assets/images/LogoLocal.png";

const Local = ({ direccion }) => {
  return (
    <div className="Local">
      <ul className="lugares">
        <li className="lugar_item">
          <img src={LogoLocal} />
          <span className="lugar_direccion">{direccion}</span>
        </li>
      </ul>
    </div>
  );
};

export default Local;
