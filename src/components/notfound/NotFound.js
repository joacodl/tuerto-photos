import React from "react";

import Title from "../navbar/Title";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Title />
      <div className="not-found-message">
        <h2>Ups... That page doesn't exists</h2>
      </div>
    </div>
  );
};

export default NotFound;
