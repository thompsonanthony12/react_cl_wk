import React from "react";

const Get = () => {
  return (
    <section className="font-mont p-20">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-extrabold text-[35px] text-[#161c2d] ">
          Get our latest updates
        </h3>
        <p className="text-[#161c2d] font-thin w-[403px]">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="flex items-center justify-center mt-10 ">
        <form className="w-[700px] h-14 border absolute">
          <input type="email" name="" placeholder="Enter Your Email" />
        </form>
        <button className="bg-[#473bf0] w-[166px] h-[50px] rounded-md ml-64">
          Subscribe
        </button>
      </div>
      <div className=" flex items-center justify-center mt-10 font-thin ">
        <p className="w-[402px] text-[#161c2d]">
          We’ll never share your details with third parties. View our Privacy
          Policy for more info.
        </p>
      </div>
    </section>
  );
};

export default Get;
