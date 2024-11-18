import slide1 from "../assets/slide/slide1.jpg"; 
import slide2 from "../assets/slide/slide2.jpg";
import slide3 from "../assets/slide/slide3.jpg";
import slide4 from "../assets/slide/slide4.jpg";
import slide5 from "../assets/slide/slide5.jpg";
import slide6 from "../assets/slide/slide6.jpg";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";
import { useState, useEffect } from "react";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  
  const nextSlide = () => {
    setIndex((index) => (index + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((index) => (index - 1 + slides.length) % slides.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[30px] md:mt-[30px] relative">
      <div className="overflow-hidden relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]">
        <img
          src={slides[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover scale-[2] sm:scale-[1.5] md:scale-[1.2] lg:scale-100 transition-transform duration-500 ease-in-out"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E3E6E6] pointer-events-none" />
      </div>

      <button
        type="button"
        className="absolute top-1/4 -translate-y-1/4 left-0 z-30 flex items-center justify-center h-30 px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10">
          <img className="h-8 w-8" src={prev} alt="" />
        </span>
      </button>

      <button
        className="absolute top-1/4 -translate-y-1/4 right-0 z-30 flex items-center justify-center h-30 px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10">
          <img className="h-8 w-8" src={next} alt="" />
        </span>
      </button>
    </div>
  );
};

export default Slideshow;
