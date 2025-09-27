import React from "react";
import Heading from "./mini-components/Heading";
const Reasons = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="ml-44 p-16">
          <img src="/man.svg" alt="man photo" />
        </div>
        <div className="mr-52">
          <h4 className="w-52 text-[#161c2d] font-semibold text-[25px] ">
            Reasons you should choose us to grow today.
          </h4>
          <p className="font-[400] w-96  ">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand.
          </p>
          <div className="mt-24 space-x-16 font-extrabold text-[#161c2d]">
            <span>fully responsive</span>
            <span>Beautifull Layout</span>
          </div>
          <div className=" space-x-24 font-extrabold text-[#161c2d] ">
            <span>Easy to Edit</span>
            <span>Google Font include</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
