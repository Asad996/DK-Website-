import React, { useEffect } from "react";


import Bannerall from "../Shared/Bannerall";
import remoteintern from "../Helpers/Remoteinternbanner";
import Card from "../OnsiteJob/Card";
import interns from "../Helpers/Remoteinterns";
import Certificate from "../Home/Certificate";
import images2 from "../Helpers/Certificatepics";
import ReviewCarousel from "../Home/ReviewCarousel";
import Reviews from "../Helpers/Reviews";
import Heroimage from "../Home/Heroimage";
import getWorkimg2 from "../Helpers/Herobanner2";
import Accordion from "../Shared/Accorden";
import accorden from "../Helpers/Accordendat";

const RemoteIntership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const intern = interns();
  const workimg2 = getWorkimg2();

  return (
    <>
      <Bannerall banner={remoteintern()} />
      <Card onstjob={intern} />
      <Certificate images={images2()} />
      <ReviewCarousel reviews={Reviews()} />
      <Heroimage workimg={workimg2} />
      <Accordion data={accorden()} />
    </>
  );
};

export default RemoteIntership;
