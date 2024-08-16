import React, { useEffect } from "react";

import Bannerall from "../Shared/Bannerall";
import onsiteintern from "../Helpers/Onsiteinternbanner";
import Card from "../OnsiteJob/Card";
import interns from "../Helpers/Remoteinterns";
import Certificate from "../Home/Certificate";
import images2 from "../Helpers/Certificatepics";
import ReviewCarousel from "../Home/ReviewCarousel";
import Reviews from "../Helpers/Reviews";

import Accordion from "../Shared/Accorden";
import accorden from "../Helpers/Accordendat";
import creative from "../Helpers/Onsitejobimg";
import Heroimag3 from "../About/Heroimg3";

const OnsiteIntership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const intern = interns();
  const Creativeimg = creative();

  return (
    <>
      <Bannerall banner={onsiteintern()} />
      <Card onstjob={intern} />
      <Certificate images={images2()} />
      <Heroimag3 workimg={Creativeimg} />
      <ReviewCarousel reviews={Reviews()} />
      <Accordion data={accorden()} />
    </>
  );
};

export default OnsiteIntership;
