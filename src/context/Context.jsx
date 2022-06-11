import React from "react";
import { useState } from "react";
const context = React.createContext(null);

export const ContextProvider = ({ children }) => {
  const [carritoItems, setCarritoItems] = useState([]);
  const [localSelected, setLocalSelected] = useState("");

  return (
    <context.Provider
      value={{
        carritoItems,
        setCarritoItems,
        localSelected,
        setLocalSelected,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default context;
