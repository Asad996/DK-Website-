import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../Shared/Button";

const Heroimag3 = ({ workimg,isCTA = true}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="text-gray-600 body-font container ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <motion.img
            className="object-cover object-center m-auto rounded-3xl"
            alt="hero"
            src={workimg.url}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          />
        </div>

        <motion.div
          className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="title-font sm:text-4xl text-3xl mx-auto mb-4 font-bold text-gradient ">
            {workimg.title}
          </h1>
          <p className="mb-8 leading-relaxed">{workimg.para}</p>
          <div className="flex justify-center mx-auto">
          {isCTA ? ( <Button>
          Apply Now
          </Button> ) : (
                null
            )}
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Heroimag3;
