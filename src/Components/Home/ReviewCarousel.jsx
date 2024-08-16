import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ReviewCarousel = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Determine the number of visible slides based on screen size
  const getVisibleSlides = () => {
    if (window.innerWidth < 640) {
      return 1; // Small screens (mobile)
    } else if (window.innerWidth < 768) {
      return 2; // Medium screens (tablet)
    } else if (window.innerWidth < 1024) {
      return 3; // Large screens (small desktop)
    } else {
      return 4; // Extra large screens (large desktop)
    }
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to advance to the next image
  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Automatic sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Adjust the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []); // Run once on mount

  // Array of visible reviews based on current index
  const visibleReviews = [];
  for (let i = 0; i < visibleSlides; i++) {
    visibleReviews.push(reviews[(index + i) % reviews.length]);
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
       Feedback
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
        <div className="flex overflow-hidden w-full justify-center px-4 md:px-8 lg:px-12">
          {visibleReviews.map((review, i) => (
            <div key={i} className="max-w-xs mx-3 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center px-4 py-4">
                <img className="w-12 h-12 rounded-full object-cover mr-4" src={review.url} alt={review.name} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.email}</p>
                </div>
              </div>
              <div className="px-4 py-2">
                <p className="text-gray-700 text-base">
                  {review.text}
                </p>
              </div>
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

export default ReviewCarousel;
