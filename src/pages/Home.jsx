import React from "react";
import Slider from "../components/slider/Slider";

import mcDonald from "../assets/images/mcdonald.png";
import cajitaFeliz from "../assets/images/cajita-feliz.jpg";
import nuevaBurger from "../assets/images/nueva-burger.jpg";

const IMAGES = [
  {
    alt: "Mcdonald logo",
    src: mcDonald,
  },
  {
    alt: "Raya cajita feliz",
    src: cajitaFeliz,
  },
  {
    alt: "Nueva burger",
    src: nuevaBurger,
  },
];

const Home = () => {
  return <Slider images={IMAGES}></Slider>;
};

export default Home;
