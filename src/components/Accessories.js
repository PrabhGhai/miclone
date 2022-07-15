import React from "react";
import "../styles/accessoriesmain.css";
const Accessories = ({ cards }) => {
  return (
    <div className="container  main   ">
      {cards.map((index) => (
        <div className="mx-3 my-2 card">
          <img
            alt=""
            className="d-flex justify-content-center "
            style={{ width: "200px", height: "200px" }}
            src={index.image}
          ></img>
          <p className="d-flex justify-content-center">{index.name}</p>
          <p
            className="d-flex justify-content-center "
            style={{ color: "orangered" }}
          >
            {index.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accessories;
