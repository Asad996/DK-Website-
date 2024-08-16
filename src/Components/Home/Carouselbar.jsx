import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Carouselbar = ({ images }) => {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.1,
  });

  // Function to advance to the next image
  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatic sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 1000); // Adjust the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [index]); // Re-run effect when index changes

  // Array of visible images based on current index
  const visibleImages = [];
  for (let i = 0; i < 3; i++) {
    visibleImages.push(images[(index + i) % images.length]);
  }

  return (
    <div ref={ref} className="container mx-auto text-center my-10">
      <p
        className={`text-4xl font-bold mb-8 transition-opacity duration-1000 ${
          inView
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-10"
        }`}
      >
        CLIENTS
      </p>
      <div
        className={`flex items-center justify-center relative transition-opacity duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-3xl p-2 mr-4"
        >
          <i className="bi bi-caret-left"></i>
        </button>
        <div className="flex overflow-hidden w-4/5 justify-center ml-20  p-4 transition-all duration-300">
          {visibleImages.map((image, i) => (
            <div key={i} className="flex-shrink-0 w-1/4 p-6 ">
              <img
                src={image.url}
                alt={`carousel ${i}`}
                className="h-auto rounded-lg shadow-md  transition-transform duration-500 ease-in-out hover:scale-125"
              />
            </div>
          ))}
        </div>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-black p-2 ml-4"
        >
          <i className="bi bi-caret-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carouselbar;




