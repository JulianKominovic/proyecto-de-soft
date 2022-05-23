import React from "react";
import Slider from "../components/Slider/Slider";

import mcDonald from "../assets/images/mcdonald.png";
import cajitaFeliz from "../assets/images/cajita-feliz.jpg";
import nuevaBurger from "../assets/images/nueva-burger.jpg";
import Tarjeta from "../components/Tarjeta/Tarjeta";

import pediYRetira from "../assets/images/PediYRetira.jpg";
import mcDelivery from "../assets/images/McDelivery.png";
import ofertas from "../assets/images/OfertasEspeciales.png";
import cupon from "../assets/images/Promo.png";

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
  return (
    <>
      <Slider images={IMAGES}></Slider>
      <Tarjeta
        titulo={"Un McDonald's en tu mano"}
        imagen={pediYRetira}
        alt={"Pedí y retirá"}
      />
      <Tarjeta
        titulo={"Pedí, nosotros te lo llevamos"}
        imagen={mcDelivery}
        alt={"McDelivery"}
      />
      <Tarjeta titulo={"Ofertas especiales"} imagen={ofertas} alt={"Ofertas"} />
      <Tarjeta titulo={"Cupones"} imagen={cupon} alt={"Cupones"} />
    </>
  );
};

export default Home;
