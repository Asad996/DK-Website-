import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../Shared/Button";
import { Link } from "react-router-dom";

const Banner = () => {
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
    <section ref={ref} className="text-gray-600 body-font">
      <div className="container  mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <motion.div
          className="text-center lg:w-2/3 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <h1 className="title-font  sm:text-4xl text-3xl mb-4  text-gradient font-extrabold">
            DK Recruitment Exciting Jobs & Internships On-site & Remote Program
          </h1>
          <p className="mb-8 leading-relaxed">
            Unlock a world of career possibilities with DK Recruitment Find
            rewarding jobs and internships both Physical and Online Start your
            journey with us today!
          </p>
          <div className="flex justify-center gap-6">
           <Link to="/onsitejobs"><Button>JOBS</Button></Link> 
           <Link to="/onsiteintern"> <Button>INTERSHIP</Button></Link> 
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
