import React from "react";
import { useContext } from "react";
import context from "./Context";

const useCarrito = () => {
  const { carritoItems, setCarritoItems } = useContext(context);

  /**
   * Agregar producto (agregar el objeto)
   * @param {object} objeto
   */
  const addItem = (newItem, unidades) => {
    setCarritoItems((prev) => [...prev, { ...newItem, unidades: unidades }]);
  };

  /**
   * Eliminar item por ID
   * @param {string} id
   */
  const removeItem = (id = "") => {
    setCarritoItems((prev) => prev.filter((item) => item._id !== id));
  };

  /**
   * Traer los items del carrito
   */

  const getCarritoItems = () => carritoItems;

  return {
    addItem,
    removeItem,
    getCarritoItems,
  };
};

export default useCarrito;
