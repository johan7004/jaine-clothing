import React from "react";
import'./category-item.style.css'

export default function CategoryItem({ category }) {

    const {title, imageUrl} = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Buy Now</p>
      </div>
    </div>
  );
}
