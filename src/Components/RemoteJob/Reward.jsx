import React from "react";
import { useInView } from 'react-intersection-observer';
import rewards from "../Helpers/Rewards";

const Reward = () => {
  const rewardItems = rewards(); // Assuming rewards() returns an array of reward objects
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div 
        ref={ref} 
        className={`container mx-auto text-center my-10 transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
      >
        <p className="text-4xl font-bold">On Board Candidates Rewards</p>
        <p>Expect the Basic Salary</p>
      </div>
      <div className={`px-2 sm:px-8 md:px-16 lg:px-24 xl:px-36 flex flex-wrap justify-center transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        {rewardItems.map((reward, index) => (
          <div 
            key={index} 
            className={`transition-transform transform hover:scale-105 m-4 p-1 border border-gray-300 rounded-lg shadow-lg bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 0.1}s` }} // Adding delay for staggered animation
          >
            <img src={reward.URL} alt={`reward${index}`} className="w-full h-full object-cover mb-4 rounded" />
          </div>
        ))}
      </div>
      <div className="mx-auto text-center my-4">
        <p>Discover rewarding remote jobs with flexible work arrangements and <br /> opportunities for growth at Remote Jobs. Unlock your potential from anywhere.</p>
      </div>
    </>
  );
};

export default Reward;
