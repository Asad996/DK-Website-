import React from 'react';
import { useInView } from 'react-intersection-observer';

const PriceCard = ({ Pricedata }) => {
  const { title, adds, recommendations, updates, pricing } = Pricedata;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`max-w-sm mx-auto bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-105`}
    >
      <div className="text-center mb-4">
        <button className="bg-black text-white py-2 px-4 rounded-full">{title}</button>
      </div>
      {adds && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">3 Adds</h3>
          <ul className="list-disc list-inside">
            {adds.map((add, index) => (
              <li key={index}>{add}</li>
            ))}
          </ul>
        </div>
      )}
      {recommendations && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Talent Recommendation</h3>
          <ul className="list-disc list-inside">
            {recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>
      )}
      {updates && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Updates</h3>
          <ul className="list-disc list-inside">
            {updates.map((update, index) => (
              <li key={index}>{update}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">Pricing</h3>
        <p>{pricing}</p>
      </div>
    </div>
  );
};

export default PriceCard;
