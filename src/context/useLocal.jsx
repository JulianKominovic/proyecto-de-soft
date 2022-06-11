import React from "react";

const useLocal = () => {
  const { localSelected, setLocalSelected } = useContext(context);

  const setLocal = (string = "") => setLocalSelected(string);
  const getLocal = () => localSelected;

  return { setLocal, getLocal };
};

export default useLocal;
