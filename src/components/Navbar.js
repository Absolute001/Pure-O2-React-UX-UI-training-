import React from "react";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 items-center max-w-screen-xl mx-auto">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-24" />
      </Link>
      <Link to="/about-us">
        <h1 className="text-xl font-semibold text-white">About Us</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
