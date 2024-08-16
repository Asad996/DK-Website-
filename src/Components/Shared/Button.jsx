import React from "react";

const Button = ({children}) => {
  return (
    <button className="relative font-medium text-lg tracking-wide rounded-lg cursor-pointer border-none bg-gradient-to-r from-gray-400 to-gray-700 text-white overflow-hidden">
      <span className="relative z-10 transition-colors duration-400 inline-flex items-center px-6 py-2">
        {children}
      </span>
      <div className="absolute inset-0 z-0 w-full h-full bg-black transform skew-x-30 -left-full transition-transform duration-400 ease-in-out cssbuttons-io-before"></div>
    </button>
  );
};

export default Button;
