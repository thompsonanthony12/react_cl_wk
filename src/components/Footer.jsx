import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="p-20 font-mont mb-28 bg-[#161c2d] text-white">
      <div className="flex items-center justify-between">
        <div className="text-white">
          <h4 className=" font-extrabold h-20">Brainwave.io</h4>
          <p className="font-light w-[270px] mb-20">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <div className="flex items-center justify-center gap-20 text-slate-300 font-[500px]">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div>
          <span className="font-bold leading-10">company</span>
          <div className="flex flex-col gap-5 font-extralight ">
            <a href="/">About us</a>
            <a href="/">contact us</a>
            <a href="/">Careers</a>
            <a href="/">press</a>
          </div>
        </div>
        <div>
          <span className="font-bold leading-10 ]">Product</span>
          <div className="flex flex-col gap-5 font-extralight ">
            <a href="/">Features</a>
            <a href="/">pricing</a>
            <a href="/">help desk</a>
            <a href="/">support</a>
            <a href="/">news</a>
          </div>
        </div>
        <div>
          <span className="font-bold leading-10">Services</span>
          <div className="flex flex-col gap-5">
            <a href="/">Digital Marketing</a>
            <a href="/">Content Writing</a>
            <a href="/">SEO for Business</a>
            <a href="/">UI Design</a>
          </div>
        </div>
        <div>
          <span className="font-bold leading-10">Services</span>
          <div className="flex flex-col gap-5">
            <a href="/">Features</a>
            <a href="/">pricing</a>
            <a href="/">help desk</a>
            <a href="/">support</a>
            <a href="/">news</a>
          </div>
        </div>
        <div>
          <span className="font-bold leading-10">Legal</span>
          <div className="flex flex-col gap-5">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms and condition</a>
            <a href="/">REturn policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
