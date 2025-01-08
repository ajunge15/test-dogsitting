import React from "react";
import "./../Carousel.css";
import "./../../data/carouselData.json";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

export default function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide < 4) {
      setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }
  };
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.slides.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}
