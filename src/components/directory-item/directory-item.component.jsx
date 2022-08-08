import React from "react";
import { useNavigate } from "react-router-dom";
import "./directory-item.styles.css";

export default function DirectoryItem({ category }) {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
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
