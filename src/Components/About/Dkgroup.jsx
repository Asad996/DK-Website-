import React from 'react';
import { useInView } from 'react-intersection-observer';

const Dkgroup = ({ dkimg }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div 
        ref={ref} 
        className={`px-36 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
      >
        <img src={dkimg.URL} alt="Branch" className="w-full" />
      </div>
    </>
  );
}

export default Dkgroup;
