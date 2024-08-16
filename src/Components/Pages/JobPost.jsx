import React, { useEffect } from "react";

import Bannerall from "../Shared/Bannerall";
import postbanner from "../Helpers/Jobpostbanner";
import Carouselbar from "../Home/Carouselbar";
import images from "../Helpers/Clients";
import PriceCard from "../Shared/PriceCard";
import data from "../Helpers/PriceCard";
import ReviewCarousel from "../Home/ReviewCarousel";
import Reviews from "../Helpers/Reviews";
import Dkgroup from "../About/Dkgroup";
import DKimg from "../Helpers/Dkgroup";
import Testimonials from "../Shared/Testimonials";

const JobPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dkimge = DKimg();

  return (
    <>
      <Bannerall banner={postbanner()} />
      <Carouselbar images={images()} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data().map((card, index) => (
          <PriceCard key={index} Pricedata={card} />
        ))}
      </div>
      <ReviewCarousel reviews={Reviews()} />
      <Dkgroup dkimg={dkimge} />
      <Testimonials />
    </>
  );
};

export default JobPost;


