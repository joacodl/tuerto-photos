import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import "./Title.css";

const Title = ({ category }) => {

  if (window.location.pathname !== "/") {
    return (
      <div className="small-title-container">
        <h2 className="title small-title" title="title">
          TU.ERTO
        </h2>
        <div className="arrow-category">
            <Link to={'/'} className="back-to-homepage">{String.fromCharCode(8592)}</Link>
            <h2 className="category-title">{category}</h2>
            <p className="hidden-arrow-category">0</p>
        </div>
      </div>
    );
  }

  return (
    <div className="big-title-container">
      <h2 className="title big-title" title="title">
        TU.ERTO
      </h2>
    </div>
  );
};

export default Title;
