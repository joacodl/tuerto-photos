import React, { useState, useRef, useEffect } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import Title from "../navbar/Title";
import HomePageCategories from "./HomePageCategories";

import "./HomePage.css";

const HomePage = ({ images, categories }) => {
  const [arrowDown, setArrowDown] = useState(true);

  const scrollRef = useRef();

  const arrowDownClickHandler = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
    setArrowDown(false);
  };

  const arrowUpClickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setArrowDown(true);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
  });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setArrowDown(false);
      } else {
        setArrowDown(true);
      }
    });
  }, []);

  return (
    <div>
      <Title />
      {arrowDown && (
        <BsArrowDown className="arrow-down" onClick={arrowDownClickHandler} />
      )}
      {!arrowDown && (
        <BsArrowUp className="arrow-down" onClick={arrowUpClickHandler} />
      )}
      <HomePageCategories
        images={images}
        categories={categories}
        reference={scrollRef}
      />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
