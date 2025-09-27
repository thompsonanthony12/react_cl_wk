import React from "react";
const Hero = () => {
  return (
    <section className="font-mont p-20">
      <div className="flex items-center justify-center ">
        <div className="mb-[15em] ml-[5rem] space-y-2">
          <h1 className="w-[27rem] h-17 font-[1000] text-[#161c2d] text-3xl">
            Make your business powerful with Shade.
          </h1>
          <p className="w-80 font-[400] text-[#161c2d] text-[10px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
          <div>
            <button className="bg-blue-700 text-white h-10 w-40 rounded-[6px]">
              Get a free quote
            </button>
          </div>
          <small className="font-[10] text-[7px]">Watch how we can help</small>
        </div>
        <div className="">
          <img src="/Bitmap.svg" alt="Hero image" />
        </div>
      </div>
      <div className="p-5 bg-[#161c2d] w-full">
        <small className="flex items-center justify-center text-white">
          Interested how our software works for you? Watch our 1 minute video
        </small>
      </div>
    </section>
  );
};

export default Hero;
