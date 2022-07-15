import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img
              alt=""
              id="logo"
              src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"
            ></img>
          </Link>
        </div>
        <Link className="navLink" to="/miphones">
          MI PHONES
        </Link>
        <Link className="navLink" to="/redmiphones">
          REDMI PHONES
        </Link>
        <Link className="navLink" to="/tv">
          TV
        </Link>
        <Link className="navLink" to="/laptop">
          LAPTOP
        </Link>
        <Link className="navLink" to="/fitness">
          FITNESS & LIFESTYLE
        </Link>
        <Link className="navLink" to="/home">
          HOME
        </Link>
        <Link className="navLink" to="/radio">
          RADIO
        </Link>
        <Link className="navLink" to="/accessories">
          ACCESSORIES
        </Link>
        <div className="searchbox">
          <input type="text" placeholder="Search Products" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
