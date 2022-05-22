import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Point } from "../../assets/icons/Icons";

import "./Slider.css";

const Slider = ({ images = [] }) => {
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const initInterval = () => {
    setIntervalId(
      setInterval(() => {
        setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }, 2000)
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      clearInterval(intervalId);
      setIndex(index < images.length - 1 ? index + 1 : 0);
      initInterval();
    },
    onSwipedRight: () => {
      clearInterval(intervalId);
      setIndex(index > 0 ? index - 1 : images.length - 1);
      initInterval();
    },
    trackMouse: true,
  });

  useEffect(() => {
    initInterval();

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <section className="slider" {...handlers}>
      <article className="slider__article">
        {images.map(({ alt, src }, currIndex) => (
          <figure
            key={alt}
            className="slider__figure"
            style={{
              left: `${currIndex * 200 - index * 200}vw`,
              zIndex: currIndex,
            }}
          >
            <img src={src} alt={alt} className="figure__image" />
          </figure>
        ))}
      </article>
      <article className="slider__indicator">
        {images.map(({ alt }, currIndex) => (
          <Point
            key={alt + "point" + currIndex}
            style={{
              color: `${index === currIndex ? "yellow" : "rgba(0,0,0,.5)"}`,
            }}
          />
        ))}
      </article>
    </section>
  );
};

export default Slider;
