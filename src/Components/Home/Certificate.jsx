// import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import '../../App.css';

// const Certificate = ({ images }) => {
//   const [index, setIndex] = useState(0);
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   // Function to advance to the next image
//   const nextImage = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to go to the previous image
//   const prevImage = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   // Automatic sliding functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImage();
//     }, 2000); // Adjust the interval (in milliseconds) as needed

//     return () => clearInterval(interval);
//   }, [index]); // Re-run effect when index changes

//   // Array of visible images based on current index
//   const visibleImages = [];
//   for (let i = 0; i < 4; i++) {
//     visibleImages.push(images[(index + i) % images.length]);
//   }

//   return (
//     <div ref={ref} className="container mx-auto text-center my-10">
//       <p
//         className={`text-4xl text-gradient font-bold mb-8 transition-opacity duration-1000 ${
//           inView
//             ? "opacity-100 transform translate-y-0"
//             : "opacity-0 transform -translate-y-10"
//         }`}
//       >
//         CERTIFICATES
//       </p>
//       <div
//         className={`flex items-center justify-center relative transition-opacity duration-1000 ${
//           inView ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <button
//           onClick={prevImage}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 mr-4"
//         >
//           <i className="bi bi-caret-left"></i>
//         </button>
//         <div className="flex overflow-hidden w-full justify-center ">
//           {visibleImages.map((image, i) => (
//             <div key={i} className="flex-shrink-0 w-1/4 p-2">
//               <img
//                 src={image.url}
//                 alt={`carousel ${i}`}
//                 className="h-full w-full rounded-lg shadow-md"
//                 style={{ transition: "transform 1s ease, opacity s ease" }}
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={nextImage}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-white p-2 ml-4"
//         >
//           <i className="bi bi-caret-right"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Certificate;





import React, { useState } from "react";
import '../../App.css';

const Certificate = ({ images }) => {
  const [index, setIndex] = useState(0);

  // Function to advance to the next image
  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Array of visible images based on current index
  const visibleImages = [];
  for (let i = 0; i < 4; i++) {
    visibleImages.push(images[(index + i) % images.length]);
  }

  return (
    <div className="container mx-auto text-center my-10">
      <p className="text-4xl font-bold mb-8">CERTIFICATES</p>
      <div className="flex items-center justify-center relative">
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-3xl p-2 mr-4"
        >
          <i className="bi bi-caret-left"></i>
        </button>
        <div className="flex overflow-hidden w-full justify-center ">
          {visibleImages.map((image, i) => (
            <div key={i} className="flex-shrink-0 w-1/4 p-2">
              <img
                src={image.url}
                alt={`carousel ${i}`}
                className="h-full w-full rounded-lg shadow-md"
                style={{ transition: "transform 1s ease, opacity 1s ease" }}
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

export default Certificate;
