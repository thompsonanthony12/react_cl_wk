import React from "react";
import { Link } from "react-router-dom";

const SecondNav = () => {
  return (
    //my navbar section//
    <nav className="bg-green-100 px-12 py-10 h-max flex items-center justify-between font-mono font-bold">
      <div>
        <Link to="/">Brainwave.io</Link>
      </div>
      <div>
        <ul className="space-x-10 text-[15px] text-[#161c2d] hover:text-green-800  ">
          <Link to="/">Demos</Link>
          <Link to="/">Pages</Link>
          <Link to="/">Support</Link>
          <Link to="/">Contact</Link>
        </ul>
      </div>
      <div className="space-x-3 text-[15px] text-[#161c2d] hover:text-green-800 ">
        <button>LogIn</button>
        <button>SignIn</button>
      </div>
    </nav>
  );
};

export default SecondNav;
