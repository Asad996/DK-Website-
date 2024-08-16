import React, { useEffect } from "react";

import Blogs from "../About/Blogs";
import Heroimage from "../Home/Heroimage";
import Ceoimg from "../Helpers/Ceo";
import creative from "../Helpers/Heroimg3";
import Heroimag3 from "../About/Heroimg3";
import Testimonials from "../Shared/Testimonials";
import Dkgroup from "../About/Dkgroup";
import DKimg from "../Helpers/Dkgroup";
import Bannerall from "../Shared/Bannerall";
import Aboutbanner from "../Helpers/Aboutbanner";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Ceoimge = Ceoimg();
  const Creativeimg = creative();
  const dkimge = DKimg();
  return (
    <>
      <Bannerall banner={Aboutbanner()} />

      <Blogs />
      <Heroimage workimg={Ceoimge} isCTA={false} />
      <Heroimag3 workimg={Creativeimg} isCTA={false} />
      <Testimonials />
      <Dkgroup dkimg={dkimge} />
    </>
  );
};

export default About;
