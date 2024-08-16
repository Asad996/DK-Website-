import React from "react";
import Blogs1 from "../Helpers/Blogs"; // Make sure the path is correct
import { useInView } from 'react-intersection-observer';

const Blogs = () => {
  const blogs = Blogs1(); // Call the function to get the blogs array
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`h-auto w-full flex flex-wrap justify-center items-center transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
    >
      {blogs.map((P, index) => (
        <div 
          key={index} 
          className="h-80 w-full sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/4 text-center p-4 rounded-3xl m-4 bg-white shadow-lg transition-transform transform hover:scale-105"
        >
          <img src={P.URL} alt="" className="w-24 mx-auto" />
          <p className="text-xl sm:text-2xl text-gradient font-extrabold transition-colors duration-300 hover:text-gray-700">{P.Type}</p>
          <p className="font-bold my-3">{P.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
