import React from "react";
import Navbar from "../navbar";
import Hero from "../Hero";
import Services from "../services";
import Info from "../info";
import Reasons from "../reasons";
import Testimonial from "../testimonial";
import Imagee from "../Imagee";
import CTA from "../CTA";
import Footer from "../footer";

const Hompage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Info />
      <Reasons />
      <Imagee />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default Hompage;
