import React from "react";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 items-center max-w-screen-xl mx-auto">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-24" />
      </Link>
      <a
        href="https://www.linkedin.com/in/kevin-shallvari-a6177b1b8/"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-xl font-semibold text-white">About the Dev</h1>
      </a>
    </nav>
  );
};

export default Navbar;
