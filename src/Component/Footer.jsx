import { FaYoutube } from "react-icons/fa";

import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="flex gap-10 pl-3 pr-3 bg-gray-300 justify-evenly py-6 ">
        <div className="">
          <p className="font-bold text-lg">Jobs By Roles</p>

          <div className="flex flex-wrap gap-x-4 font-extralight ">
            <p>Accountant</p>
            <p>Architect</p>
            <p>BPO / Telecaller</p>

            <p>Tech Support</p>
            <p>Content Writer</p>
            <p>Fashion Designer</p>
            <p>Data Entry</p>
            <p>SEO / Social Media</p>
            <p>HR / Admin</p>
            <p>Engineer(Core,Non-IT)</p>
            <p>Sales Executive</p>
            <p>Management Trainee</p>
            <p>Design / Animation</p>

            <p>Teacher / Trainer</p>
            <p>Delivery Executive</p>
            <p>Chef / Cook</p>
            <p>Counsellor</p>
            <p>More Roles</p>
          </div>
        </div>

        <div>
          <p className="font-bold text-lg">Job By Cities</p>
          <div className="flex flex-wrap gap-x-4 font-extralight">
            <p>Ahmedabad</p>
            <p>Bangalore</p>
            <p>Chennai</p>
            <p>Delhi</p>

            <p>Hyderabad</p>
            <p>Kolkata</p>
            <p>Mumbai</p>
            <p>Pune</p>
            <p>Noida</p>
            <p>Gurgaon</p>
            <p>Chandigarh</p>

            <p>Panaji</p>
            <p>Patna</p>
            <p>Bhopal</p>
            <p>Ahmednagar</p>
            <p>Bhubaneshwar</p>
            <p>Pondicherry</p>
            <p>Mohali</p>

            <p>Jaipur</p>
            <p>More Cities</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-6 flex justify-evenly ">
        <div>
          <p className="font-semibold">Information</p>

          <div className="font-extralight">
            <p>Contact Us</p>
            <p>Business Enquiries</p>
            <p>FAQ</p>
            <p>Blog</p>
            <p>Referral</p>
          </div>
        </div>

        <div>
          <div className="font-semibold">Follow Us</div>
          <div className="flex pt-1 gap-1 ">
            <GrFacebookOption size={26} />

            <FaLinkedinIn size={26} />
            <FaYoutube size={26} />
          </div>

          <div className="font-mono pt-6 ">
            Easy Job access on the go
            <IoLogoGooglePlaystore size={55} />
          </div>
        </div>
      </div>

      <div className="px-4 text-center pt-6 bg-gray-700 text-gray-400 flex flex-col items-center font-light text-xs">
        <p>Copyright © 2024 TeamLease. All rights reserved</p>
        <p>
          ISO 27001 Information Technology Security Management System. Certified
          by British Standards
        </p>
        <p className="py-4">Terms & Conditions|Privacy Policy|Sitemap</p>
      </div>
    </div>
  );
}

export default Footer;
