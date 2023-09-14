import React, { useState } from "react";
import './Corusel.scss'
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    // Add more slide content as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className='carousel'>
      <div className='slides'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}>
            {slide}
          </div>
        ))}
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
