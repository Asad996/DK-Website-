import React from "react";
import JobsList from "../Helpers/JobsList"; // Make sure the path is correct
import { useInView } from 'react-intersection-observer';
import Button from "../Shared/Button";
import { Link } from "react-router-dom";

const Jobsbox = ({ links }) => {
  const jobs = JobsList(); // Call the function to get the jobs array
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div 
        ref={ref} 
        className="text-center transition-all duration-1000"
      >
        <p className={`text-2xl font-medium transition-transform ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          JOBS BY DEPARTMENT
        </p>
      </div>
      <div 
        className={`h-auto w-full flex flex-wrap justify-center items-center transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
      >
        {jobs.map((P, index) => (
          <div 
            key={index} 
            className={`h-auto w-full sm:w-2/5 md:w-1/3 lg:w-1/5 text-center p-4 rounded-3xl m-4 bg-white shadow-lg transition-transform transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-105`}
            style={{ transitionDelay: `${index * 0.1}s` }} // Adding delay for staggered animation
          >
            <p className="text-xl sm:text-2xl font-bold transition-colors duration-300 hover:text-gray-700">{P.Type}</p>
            <p className="font-bold my-3">{P.text}</p>
            <Link to={links[index]}>
              <Button>More Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Jobsbox;
