import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Heading = ({ text }) => {
  return (
    <>
      <p
        className="d-flex justify-content-center my-5"
        style={{ fontWeight: "bold", fontSize: "30px" }}
      >
        {text}
      </p>
    </>
  );
};

export default Heading;
