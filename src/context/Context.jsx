import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const context = React.createContext(null);

const carritoStorage = localStorage.getItem("carritoItems");
const localSelectedStorage = localStorage.getItem("localSelected");

export const ContextProvider = ({ children }) => {
  const [carritoItems, setCarritoItems] = useState(
    carritoStorage ? JSON.parse(carritoStorage) : []
  );
  const [localSelected, setLocalSelected] = useState(
    localSelectedStorage ? JSON.parse(localSelectedStorage) : ""
  );

  useEffect(() => {
    localStorage.setItem("carritoItems", JSON.stringify(carritoItems));
  }, [carritoItems]);
  useEffect(() => {
    localStorage.setItem("localSelected", JSON.stringify(localSelected));
  }, [localSelected]);

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
