import React from "react";

const Info = () => {
  return (
    <section className="font-mont p-10 bg-[#f4f7fa]">
      <h3 className="flex items-center justify-center font-[700] text-2xl text-[#161c2d]">
        Services we offfer
      </h3>
      <div className="flex items-center justify-center font-[400] text-xl">
        <p className="w-[550px] text-center text-[#161c2d]">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="flex items-center justify-center p-20 ml-40 gap-7">
        <div>
          <h5 className=" text-[#161c2d] font-[700] text-[21px] h-10  ">
            Digital Marketing
          </h5>
          <img src="/Rectangle.svg" alt="" className="" />
          <small className="text-[#161c2d] font-[400]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </small>
          <div className=" text-[#473bf0]">
            <a href="/">Read more</a>
          </div>
        </div>
        <div>
          <h5 className=" text-[#161c2d] font-[700] text-[21px] h-10">
            Buisness Growth
          </h5>
          <img src="/flower.svg" alt="" />
          <small className="text-[#161c2d] font-[400]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </small>
          <div className="text-[#473bf0] font-light">
            <a href="/">Read More</a>
          </div>
        </div>
        <div>
          <h5 className="text-[#161c2d] font-[700] text-[21px] h-10">
            Content Creating
          </h5>
          <img src="/Rect2.svg" alt="" />
          <small className="text-[#161c2d] font-[400]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </small>
        </div>
      </div>
    </section>
  );
};

export default Info;
