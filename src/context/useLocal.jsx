import React from "react";
import { useContext } from "react";
import context from "./Context";

const useLocal = () => {
  const { localSelected, setLocalSelected } = useContext(context);

  const setLocal = (string = "") => setLocalSelected(string);
  const getLocal = () => localSelected;

  return { setLocal, getLocal };
};

export default useLocal;
