import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  CONTACT,
  DASHBOARD,
  EVENTS,
  HOME,
  SERVICES,
  TESTIMONIAL,
} from "../../shared/constant/pageRoutes";
const Header = () => {
  return (
    <>
      <div className="w-full bg-white shadow-slate-600 h-20 flex justify-around items-center">
        <div>
          <span className="text-xl logo">Banquet Management System</span>
        </div>
        <div className="flex gap-6" id="customize_button">
          <Link to={HOME} className="text-black border-none px-3 text-base">
            Home
          </Link>
          <Link to={SERVICES} className="text-black border-none px-3 text-base">
            Services
          </Link>
          <Link to={EVENTS} className="text-black border-none px-3 text-base">
            Events
          </Link>
          <Link
            to={TESTIMONIAL}
            className="text-black border-none px-3 text-base"
          >
            Testimonials
          </Link>
          <Link to={CONTACT} className="text-black border-none px-3 text-base">
            Contact
          </Link>
          <Link
            to={DASHBOARD}
            className="text-black border-none px-3 text-base"
          >
            Dashboard
          </Link>
        </div>
      </div>
      <hr className="border-black shadow-lg"></hr>
    </>
  );
};

export default Header;
