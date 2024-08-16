import React, { useEffect } from "react";

// Home components
import Banner from "../Home/Banner";
import Jobsbox from "../Home/Jobsbox";
import Carouselbar from "../Home/Carouselbar";
import Heroimage from "../Home/Heroimage";
import Certificate from "../Home/Certificate";
import ReviewCarousel from "../Home/ReviewCarousel";
import Branches from "../Home/Branches";

// help path
import branchimg from "../Helpers/Brancheimg";
import Reviews from "../Helpers/Reviews";
import getWorkimg2 from "../Helpers/Herobanner2";
import getWorkimg from "../Helpers/Herobanner1";
import images2 from "../Helpers/Certificatepics";
import getWorkimg3 from "../Helpers/Herobanner3";
import images from "../Helpers/Clients";

// shared path
import Testimonials from "../Shared/Testimonials";

const jobLinks = [
  "/onsiteintern",
  "/onsitejobs",
  "/remotejobs",
  "/remoteintern",
]; // Add your links here

const Home = () => {
  const workimg = getWorkimg();
  const workimg2 = getWorkimg2();
  const workimg3 = getWorkimg3();
  const branchimge = branchimg();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <Jobsbox links={jobLinks} />
      <Carouselbar images={images()} />
      <Heroimage workimg={workimg} link="/remotejobs" />
      <Certificate images={images2()} />
      <Heroimage workimg={workimg2} link="/remoteintern" />
      <Testimonials />
      <Heroimage workimg={workimg3} link="/remotejobs" />
      <ReviewCarousel reviews={Reviews()} />
      <Branches branchimg={branchimge} />
    </div>
  );
};

export default Home;
