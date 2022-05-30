import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Title from "../navbar/Title";

import "./CategoryPage.css";

const CategoryPage = ({ images, categories }) => {
  const params = useParams();

  const currentCategory = params.category;

  
  const navigate = useNavigate();

  useEffect(() => {
    if (!categories.includes(params.category)) {
      return navigate("/notFound", { replace: true });
    }
  });

  window.scrollTo({
    top: 0,
  });

  return (
    <div className="category-page">
      <Title category={params.category} />
      <div className="category-images">
        {images[currentCategory].map((img) => (
          <div key={img} className="image-container">
            <img src={img} alt={`${currentCategory} photography`} />
            {/* <div className="image-caption">
              <p>{`${img.title}, ${img.year}`}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
