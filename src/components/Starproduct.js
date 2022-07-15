import React from "react";
import "../styles/starProduct.css";

const Starproduct = ({ product }) => {
  return (
    <>
      <div className="starProduct d-flex justify-content-center align-item-center">
        <div className="box1">
          <a href={product[0].url}>
            <img alt="" src={product[0].image}></img>
          </a>
        </div>
        <div className="box2">
          <a href={product[1].url}>
            <img alt="" src={product[1].image}></img>
          </a>
          <a href={product[2].url}>
            <img alt="" src={product[2].image}></img>
          </a>
          <a href={product[3].url}>
            <img alt="" src={product[3].image}></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Starproduct;
