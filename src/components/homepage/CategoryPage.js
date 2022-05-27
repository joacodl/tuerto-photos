import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Title from "../navbar/Title";

import "./CategoryPage.css";

const CategoryPage = ({ images, categories }) => {
  const params = useParams();

  const filteredImages = images.filter(
    (image) => image.category === params.category
  );

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
        {filteredImages.map((item) => (
          <div key={item.id} className="image-container">
            <img src={item.image} alt="" />
            <div className="image-caption">
              <p>{`${item.title}, ${item.year}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
