import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Offer = ({ offer }) => {
  return (
    <div className="Offer d-flex justify-content-around my-3">
      {offer.map((item) => (
        <Card style={{ width: "25rem" }} key={item.image}>
          <Card.Img variant="top" src={item.image} link={item.url} />
        </Card>
      ))}
    </div>
  );
};

export default Offer;
