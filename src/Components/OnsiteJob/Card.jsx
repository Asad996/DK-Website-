import React from "react";
import { useInView } from 'react-intersection-observer';
import Button from "../Shared/Button";

const Card = ({ onstjob, isCTA = false }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`my-12 flex flex-wrap justify-evenly gap-1 transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
    >
      {onstjob.map((job, index) => (
        <div 
          key={index} 
          className={`w-full md:w-1/2 lg:w-1/4 py-2 transition-transform transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-105`}
          style={{ transitionDelay: `${index * 0.1}s` }} // Staggered animation delay
        >
          <div className="bg-white h-full flex flex-col justify-between lg:text-left border p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <header>
              <h2 className="text-xl font-bold text-gray-600 sm:text-3xl">
                {job.title}
              </h2>
              <p className="mt-4 mb-4 text-gray-500">{job.type}</p>
              {isCTA && (
                <p className="mt-4 mb-4 text-gray-500">Earn: {job.Spay}PKR - {job.Lpay}PKR</p>
              )}
            </header>
            <div className="mt-auto">
              <Button>Apply Now ></Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
