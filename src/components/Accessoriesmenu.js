import React from "react";
import { Link } from "react-router-dom";
import "../styles/accessories.css";
const Accessoriesmenu = () => {
  return (
    <>
      <div
        className=" container d-flex justify-content-around my-3"
        style={{ border: "1px solid black" }}
      >
        <Link className="hotaccessories" to="/music">
          <span style={{ fontSize: "20px" }}> Music</span>
        </Link>
        <Link className="hotaccessories" to="/smartdevices">
          <span style={{ fontSize: "20px" }}>Smart Devices</span>
        </Link>
        <Link className="hotaccessories" to="/home">
          <span style={{ fontSize: "20px" }}>Home</span>
        </Link>
        <Link className="hotaccessories" to="/lifestyle">
          <span style={{ fontSize: "20px" }}>Lifestyle</span>
        </Link>
        <Link className="hotaccessories" to="/mobileaccessories">
          <span style={{ fontSize: "20px" }}>Mobile Accessories</span>
        </Link>
      </div>
    </>
  );
};

export default Accessoriesmenu;
