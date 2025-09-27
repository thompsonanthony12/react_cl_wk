import React from "react";

const SecondHero = () => {
  return (
    <section className="p-20 bg-green-100 h-screen ">
      <div className=" flex items-center justify-center">
        <div className="mb-56">
          <h1 className="font-extrabold text-[#161c2d] w-32 text-[20px]">
            Find a dream job that changes life.
          </h1>
          <p className="font-[400] text-[#161c2d] w-64 text-[12px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next job website.
          </p>
          <div className="space-x-10 mt-10 bg-[#473bf0] h-[78px] w-[700px] border rounded-2xl text-center">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="mt-7 h-8 w-48 text-center text-[#161c2d] font-bold rounded-lg outline-purple-500"
            />
            <input
              type="text"
              placeholder="City"
              className="h-8 w-56  text-[#161c2d] font-bold rounded-lg outline-purple-500"
            />
            <input
              type="search"
              name=""
              placeholder="Search"
              className="h-9 w-42  text-[#fff] text-center bg-black text-[10px] rounded-lg outline-purple-500"
            />
          </div>
        </div>
        <div>
          <img src="office.svg" alt="heroimage" />
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
