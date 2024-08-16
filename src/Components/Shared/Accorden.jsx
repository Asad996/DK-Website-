import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Accordion = ({ data }) => {
  const [accordionItems, setAccordionItems] = useState(data.map(item => ({ ...item, open: false })));
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const click = (index) => {
    setAccordionItems(prevItems =>
      prevItems.map((item, i) =>
        i === index ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <div 
      ref={ref} 
      className={`accordion w-full max-w-6xl mx-auto mt-12 transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
    >
      <p className="text-5xl font-semibold text-center m-10">Top Asked Questions</p>
      {accordionItems.map((item, index) => (
        <div key={index} className="mb-1">
          <div
            className="title bg-gray-900 text-white p-2 rounded-t cursor-pointer flex justify-between items-center"
            onClick={() => click(index)}
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <i className={`fas fa-angle-down transition-transform duration-700 ${item.open ? 'transform rotate-180' : ''}`}></i>
          </div>
          <div className={`content transition-max-height duration-700 ease-in-out overflow-hidden ${item.open ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="content-text p-4 bg-white text-gray-700 border border-indigo-500 border-t-0 rounded-b">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
