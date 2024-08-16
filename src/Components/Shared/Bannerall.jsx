import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Bannerall = ({banner}) => {
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
      <div className="container  mx-auto flex px-5  items-center justify-center flex-col my-20">
        <motion.div
          className="text-center lg:w-2/3 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="title-font text-5xl   mb-4  text-gradient font-extrabold">
            {banner.title}
          </h1>
          <p className="mb-8 leading-relaxed">
          {banner.para}
         </p>
         
        </motion.div>
      </div>
    </section>
  );
};

export default Bannerall;
