import React, { useState, useEffect } from "react";
import DropDownbtn from "../Shared/DropDownbtn";
import logo from "../../assets/Dk-Logo-1-1.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set the active button based on the current route
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActiveButton("Home");
    } else if (currentPath === "/about") {
      setActiveButton("About");
    } else if (currentPath === "/onsitejobs" || currentPath === "/remotejobs") {
      setActiveButton("Jobs");
    } else if (currentPath === "/onsiteintern" || currentPath === "/remoteintern") {
      setActiveButton("Internships");
    } else {
      setActiveButton(null);
    }
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`text-gray-600 body-font sticky-top ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex flex-wrap pt-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0">
            <span className="ml-3 text-xl">
              <img src={logo} alt="Logo" className="w-8/12" />
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex items-center text-base justify-center">
            <Link
              to="/"
              className={`mr-5 px-3 py-1 rounded ${
                activeButton === "Home"
                  ? "bg-gray-200 border-b-2 border-gray-700"
                  : "hover:text-gray-900"
              }`}
              onClick={() => setActiveButton("Home")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`mr-5 px-3 py-1 rounded ${
                activeButton === "About"
                  ? "bg-gray-200 border-b-2 border-gray-700"
                  : "hover:text-gray-900"
              }`}
              onClick={() => setActiveButton("About")}
            >
              About
            </Link>
            <DropDownbtn
              btnName="Jobs"
              option1="Onsite Jobs"
              option2="Remote Jobs"
              link1="/onsitejobs"
              link2="/remotejobs"
              className={`mr-5 px-3 py-1 rounded ${
                activeButton === "Jobs"
                  ? "bg-gray-200 border-b-2 border-gray-700"
                  : "hover:text-gray-900"
              }`}
            />
            <DropDownbtn
              btnName="Internships"
              option1="Onsite Internships"
              option2="Remote Internships"
              link1="/onsiteintern"
              link2="/remoteintern"
              className={`mr-5 px-3 py-1 rounded ${
                activeButton === "Internships"
                  ? "bg-gray-200 border-b-2 border-gray-700"
                  : "hover:text-gray-900"
              }`}
            />
          </nav>
          <Link to="/postjob">
            <button className="inline-flex items-center text-white bg-black border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
              Post A Job
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
