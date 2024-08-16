import React, { useRef, useEffect, useState } from "react";
import team from "../Helpers/Team";
import { motion } from "framer-motion";

const Testimonials = () => {
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
    <motion.div
      ref={ref}
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="w-full px-10 pt-10">
        <div className="pb-20">
          <p className="text-gradient text-3xl text-center font-extrabold">
            TEAM
          </p>
        </div>
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People"
            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            {team().map((person, index) => (
              <div
                key={index}
                role="listitem"
                className="xl:w-1/5 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 transition-transform transform hover:scale-105"
              >
                <div className="rounded overflow-hidden shadow-2xl bg-white hover:shadow-slate-500 transition-shadow duration-300 ease-in-out">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={person.url}
                        alt={`Display Picture of ${person.name}`}
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-lg shadow-black"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">
                      {person.name}
                    </h1>
                    <p className="text-gray-800 text-sm text-center">
                      {person.type}
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-3 transition-transform transform hover:scale-150"
                      >
                        <div aria-label="LinkedIn" role="img">
                          <i className="bi bi-linkedin"></i>
                        </div>
                      </a>
                      <a
                        href={person.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-3 transition-transform transform hover:scale-150"
                      >
                        <div aria-label="Twitter" role="img">
                          <i className="bi bi-twitter"></i>
                        </div>
                      </a>
                      <a
                        href={person.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-3 transition-transform transform hover:scale-150"
                      >
                        <div aria-label="Instagram" role="img">
                          <i className="bi bi-instagram"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
