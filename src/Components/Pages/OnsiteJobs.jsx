import React, { useEffect } from "react";

import Bannerall from "../Shared/Bannerall";
import jobbanner from "../Helpers/Jobbanner";
import Card from "../OnsiteJob/Card";
import onsitejob from "../Helpers/Openjobs";
import Heroimage from "../Home/Heroimage";
import images from "../Helpers/Clients";
import Reviews from "../Helpers/Reviews";
import creative from "../Helpers/Intershiphero";
import accorden from "../Helpers/Accordendat";
import intrshpimg from "../Helpers/Jobhero";
import Carouselbar from "../Home/Carouselbar";
import ReviewCarousel from "../Home/ReviewCarousel";
import Heroimag3 from "../About/Heroimg3";
import Accorden from "../Shared/Accorden";
const OnstieJobs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onsitejobs = onsitejob();
  const intrshipimge = intrshpimg();
  const Creativeimg = creative();

  return (
    <>
      <Bannerall banner={jobbanner()} />
      <Card onstjob={onsitejobs} />
      <Heroimage workimg={intrshipimge} />
      <Carouselbar images={images()} />
      <ReviewCarousel reviews={Reviews()} />
      <Heroimag3 workimg={Creativeimg} />
      <Accorden data={accorden()} />
    </>
  );
};

export default OnstieJobs;
