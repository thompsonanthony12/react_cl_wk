import React from "react";

const News = () => {
  return (
    <section className="p-20 font-mont bg-[#f4f7fa]">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-semibold text-[#161c2d] text-[35px]">
          News that helps
        </h3>
        <p className="font-light text-[#161c2d] w-[450px] mt-3">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="flex items-center justify-center space-x-10 mt-10">
        <div className="bg-white shadow-xl">
          <img src="jmpman.svg" alt="manimg" />
          <small className="font-extralight text-[#161c2d]">Career</small>
          <p className="font-semibold text-[#161c2d] w-56 ">
            How to win any job you want. Get started with 5 steps.
          </p>
        </div>
        <div className="bg-white shadow-xl">
          <img src="girl.svg" alt="manimg" />
          <small className="font-extralight text-[#161c2d]">Lifestyle</small>
          <p className="font-semibold text-[#161c2d] w-56 ">
            10 ways to reduce your office work depression.
          </p>
        </div>
        <div className="bg-white">
          <img src="/two.svg" alt="manimg" />
          <small className="font-extralight text-[#161c2d]">Career</small>
          <p className="font-semibold text-[#161c2d] w-56 ">
            Why should you work as a team even on small projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default News;
