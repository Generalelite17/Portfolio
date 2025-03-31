// Carousel.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    // Measure the carousel container's width on mount and on resize
    const updateWidth = () => {
      if (carouselContainerRef.current) {
        setSlideWidth(carouselContainerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  return (
    <div className="carousel-container" ref={carouselContainerRef}>
      <div
        className="carousel"
        style={{
          width: `${slides.length * slideWidth}px`,
          transform: `translateX(-${currentSlide * slideWidth}px)`,
          transition: "transform 0.5s ease",
        }}
      >
      {slides.map((src, index) => (
        <div
          key={index}
          className="carousel-slide"
          style={{
            width: `${slideWidth}px`,
            background: `url(${src}) center center / cover`,
          }}
        >
          <img 
            src={src} 
            alt={`Slide ${index + 1}`} 
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
          />
        </div>
      ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
