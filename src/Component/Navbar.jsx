import React, { useState } from "react";
import { IoLogoTwitter } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

import { RiInstagramLine } from "react-icons/ri";
import { IoEarthSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";

function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const Countries = [
    "India",
    "Singapore",
    "Malaysia",
    "Thailand",
    "Indonesia",
    "Philippines",
    "Vietnam",
    "Myanmar",

    "Cambodia",
    "Laos",
    "Papua New Guinea",
  ];

  const toggleMenu = () => {
    setIsShowMenu((prev) => !prev);
  };

  return (
    <div className="flex  text-white py-2 items-center flex-col bg-slate-400">
      <div className="flex items-center w-[95%] justify-between ">
        <div className="">Login | Register</div>

        <div className="text-3xl">WebSite - Name</div>

        <div className="flex   ">
          <div className="pl-3">
            <GrFacebookOption size={22} />
          </div>
          <div className="pl-3">
            <IoLogoTwitter size={22} />
          </div>
          <div className="pl-3">
            <FaLinkedinIn size={22} />
          </div>
          <div className="pl-3">
            <RiInstagramLine size={22} />
          </div>
        </div>
      </div>

      <div className="flex w-[94%] py-3  justify-between">
        <div className="flex items-center ">
          <IoEarthSharp size={25} />
          <select className="text-black border rounded-md ml-1 ">
            {Countries.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
          {}
        </div>
        <div>
          <div className="hidden lg:flex gap-5 ">
            <p>Home</p>
            <p>Job Seekers</p>
            <p>Employers</p>
            <p>Insights</p>
            <p>Contact Us</p>
            <p>Blog</p>
          </div>
          <div className="lg:hidden">
            <div className="flex gap-2 items-center" onClick={toggleMenu}>
              <span>Menu</span>
              <GoTriangleDown />
            </div>
            <div
              className={` transition max-h-0 overflow-hidden ${
                isShowMenu && "max-h-52"
              }`}
            >
              <p>Home</p>
              <p>Job Seekers</p>
              <p>Employers</p>

              <p>Insights</p>
              <p>Contact Us</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
