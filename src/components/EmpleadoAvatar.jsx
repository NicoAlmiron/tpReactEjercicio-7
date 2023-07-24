import React from "react";
import { Card } from "react-bootstrap";

const EmpleadoAvatar = (pic) => {
  return (
    <Card
      className="d-flex justify-content-center aling-items-center"
      style={{
        width: "7rem",
        height: "7rem",
        backgroundImage: "url(" + pic.pic + ")",
        backgroundSize: "cover",
      }}
    ></Card>
  );
};

export default EmpleadoAvatar;
