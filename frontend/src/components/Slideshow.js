import slide1 from "../assets/slide/slide1.jpg"; 
import slide2 from "../assets/slide/slide2.jpg";
import slide3 from "../assets/slide/slide3.jpg";
import slide4 from "../assets/slide/slide4.jpg";
import slide5 from "../assets/slide/slide5.jpg";
import slide6 from "../assets/slide/slide6.jpg";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";
import { useState,useEffect } from "react";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
const Slideshow = () => {
  // Slideshow component implementation

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
    <div className="relative">
      <div className="overflow-hidden">
        <img
          src={slides[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform"
        />
      </div>
      

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-64 px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <img className="h-8 w-8 "src={prev}alt=""></img>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
       
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-64 px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
           <img className="h-8 w-8 "src={ next}alt=""></img>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
export default Slideshow;
