import React from "react";

const Finders = () => {
  return (
    <section className="font-mont p-36">
      <div className=" flex flex-col items-center space-x-10 justify-center">
        <h3 className="font-extrabold text-[#161c2d] text-[35px] mb-6">
          Find jobs with 3 easy steps
        </h3>
        <p className="text-[#161c2d] font-light text-[100] w-96">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="flex items-center justify-center space-x-10 mt-20 leading-7">
        <div>
          <img src="Image.svg" alt="man_image" />
        </div>
        <div>
          <h3 className="text-[#161c2d] font-semibold text-[200]">
            Search for a job{" "}
          </h3>
          <p className="text-[#161c2d] font-light text-[100] w-64 ">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
          <div>
            <h3 className="text-[#161c2d] font-semibold text-[200]">
              Apply within our website
            </h3>
            <p className="text-[#161c2d] font-light text-[100] w-64  ">
              With lots of unique blocks, you can easily build a page without
              coding.
            </p>
            <div>
              <h3 className="text-[#161c2d] font-semibold text-[200]">
                Apply within our website
              </h3>
              <p className="text-[#161c2d] font-light text-[100] w-64 ">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finders;
