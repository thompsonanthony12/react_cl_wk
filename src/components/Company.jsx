import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";

const Company = () => {
  return (
    <section className="p-20 font-mont bg-white mt-16">
      <div className="flex  flex-col items-center justify-center">
        <h2 className="text-[20px] font-bold text-[#161c2d] mb-10">
          Big companies are here
        </h2>
        <p className="font-light text-[10px] w-96 mb-20">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes. You
          have a business to run . Stop worring about cross-browser bugs,
          designing new pages.
        </p>
      </div>
      <div className="font-extrabold text-[30px] flex flex-cols-6 items-center justify-center mb-20 space-x-10">
        <FaFacebook />
        <FaGoogle />
        <FaReact />
        <FaSnapchat />
        <FaWhatsapp />
        <FaTwitter />
      </div>
    </section>
  );
};

export default Company;
