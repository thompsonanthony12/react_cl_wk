import React from "react";
import SecondNav from "../SecondNav";
import SecondHero from "../SecondHero";
import Company from "../Company";
import Category from "../Category";
import Finders from "../Finders";
import News from "../News";
import Get from "../Get";
import SecondFooter from "../SecondFooter";

const SecondPage = () => {
  return (
    <div>
      <SecondNav />
      <SecondHero />
      <Company />
      <Category />
      <Finders />
      <News />
      <Get />
      <SecondFooter />
    </div>
  );
};

export default SecondPage;
