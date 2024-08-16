import React, { useEffect } from "react";


import Bannerall from "../Shared/Bannerall";
import remotejob from "../Helpers/Remotejobbanner";
import Card from "../OnsiteJob/Card";
import remotejobes from "../Helpers/Remotejob";
import Reward from "../RemoteJob/Reward";
import ReviewCarousel from "../Home/ReviewCarousel";
import Reviews from "../Helpers/Reviews";
import Heroimage from "../Home/Heroimage";
import getWorkimg2 from "../Helpers/Herobanner2";
import Accorden from "../Shared/Accorden";
import accorden from "../Helpers/Accordendat";

const RemoteJobs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const remotejobs = remotejobes();
  const workimg2 = getWorkimg2();

  return (
    <>
      <Bannerall banner={remotejob()} />
      <Card onstjob={remotejobs} isCTA={true} />
      <Reward />
      <ReviewCarousel reviews={Reviews()} />
      <Heroimage workimg={workimg2} />
      <Accorden data={accorden()} />
    </>
  );
};

export default RemoteJobs;
