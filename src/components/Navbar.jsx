import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="bg-white px-12 py-10 h-max flex items-center justify-between">
      <div className="font-mono font-bold text-[28px]">
        <Link to="/">Brainwave.io</Link>
      </div>
      <div className=" flex items-center justify-between gap-10">
        <ul className="text-[17px] font-bold space-x-20">
          <Link to="/">Demos</Link>
          <Link to="/Second-Page">Pages</Link>
          <Link to="/">Support</Link>
          <Link to="/">Contact</Link>
        </ul>
        <div>
          <button className="bg-blue-700  text-white h-10 w-40 rounded-[6px]">
            Get a free quote
          </button>
        </div>
      </div>
      <div className="font-semibold h-12 w-6 lg:hidden">
        <BiMenu />
      </div>
    </nav>
  );
};

export default Navbar;
