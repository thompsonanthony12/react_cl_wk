import React from "react";

const Services = () => {
  return (
    <section className=" font-mont p-20">
      <div className="flex items-center justify-center ml-36 leading-2 ">
        <div className="h-36 ">
          <h4 className="w-96 h-32 font-[700] text-[32px] text-[#161c2d] ">
            Experienced experts are giving advices.
          </h4>
          <p className="w-80 h-24 font-[400] text-[19px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <button className="w-48 h-11 bg-blue-700 text-white">
            Learn how we work
          </button>
        </div>
        <div className="h-96 ml-20">
          <img src="/IMG BG.svg" alt="man_image" />
        </div>
        <div className=" h-40 ml-14">
          <span>1M+</span>
          <div className="w-52 h-11 space-y-3">
            <small>
              Customers visit Albino every month to get their service done.
            </small>
          </div>
          <span>92%</span>
          <div className="w-52 h-11 space-y-3">
            <small>Satisfaction rate comes from our awesome customers.</small>
          </div>
          <span>4.9/5.0</span>
          <div className="w-52 h-11 space-y-3">
            <small>
              Average customer ratings we have got all over internet.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
