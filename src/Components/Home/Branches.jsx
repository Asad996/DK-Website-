import React from "react";
import { useInView } from 'react-intersection-observer';

const Branches = ({ branchimg }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div 
        ref={ref} 
        className={`container mx-auto text-center my-10 transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <p className="text-4xl font-bold">BRANCHES</p>
      </div>
      <div 
        className={`px-36 sm:px-8 md:px-16 lg:px-24 xl:px-36 transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <img src={branchimg.url} alt="Branch" className="w-full" />
      </div>
    </>
  );
};

export default Branches;
