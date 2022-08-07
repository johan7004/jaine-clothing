import React from "react";
import'./directory-item.styles.css'

export default function DirectoryItem({ category }) {

    const {title, imageUrl} = category;

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Buy Now</p>
      </div>
    </div>
  );
}
