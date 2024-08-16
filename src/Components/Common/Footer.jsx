import React, { useState } from "react";
import DropDownbtn from "../Shared/DropDownbtn";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (btnName) => {
    setActiveButton(btnName);
  };

  return (
    <>
      <header className="text-gray-600 body-font container items-center">
        <p className="my-8 text-center text-lg font-medium transition-all duration-1000" ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(10px)' }}>
          DK Recruitment: Your trusted partner in finding the perfect match for your career aspirations.
        </p>

        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center transition-all duration-1000" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(10px)' }}>
          <nav className="md:ml-auto md:mr-auto flex items-center text-base justify-center">
            <Link
              to="/"
              className={`mr-5 hover:text-gray-900 ${activeButton === "Home" ? 'border-b-2 border-gray-700' : 'border-b-2 border-transparent'}`}
              onClick={() => handleButtonClick("Home")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`mr-5 hover:text-gray-900 ${activeButton === "About" ? 'border-b-2 border-gray-700' : 'border-b-2 border-transparent'}`}
              onClick={() => handleButtonClick("About")}
            >
              About
            </Link>
            <DropDownbtn
              btnName="Jobs"
              option1="Onsite Jobs"
              option2="Remote Jobs"
              link1="/onsitejobs"
              link2="/remotejobs"
            />
            <DropDownbtn
              btnName="Internships"
              option1="Onsite Internships"
              option2="Remote Internships"
              link1="/onsiteintern"
              link2="/remoteintern"
            />
          </nav>
        </div>

        <div className="container flex justify-center space-x-7 text-black text-lg font-bold transition-all duration-1000" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(10px)' }}>
          <p>Privacy Policy</p>
          <p>Term & Condition</p>
        </div>

        <div className="w-full flex justify-center pt-3 pb-3 text-black text-xl transition-all duration-1000" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(10px)' }}>
          <a
            href="javascript:void(0)"
            className="mx-1 transition-transform transform hover:scale-150"
          >
            <div aria-label="LinkedIn" role="img">
              <i className="bi bi-linkedin"></i>
            </div>
          </a>
          <a
            href="javascript:void(0)"
            className="mx-1 transition-transform transform hover:scale-150"
          >
            <div aria-label="Twitter" role="img">
              <i className="bi bi-twitter"></i>
            </div>
          </a>
          <a
            href="javascript:void(0)"
            className="mx-1 transition-transform transform hover:scale-150"
          >
            <div aria-label="Instagram" role="img">
              <i className="bi bi-instagram"></i>
            </div>
          </a>
        </div>

        <div className="container flex justify-center space-x-7 text-black text-lg font-bold transition-all duration-1000" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(10px)' }}>
          <p>Powered by DK Group</p>
        </div>
      </header>
    </>
  );
};

export default Footer;
