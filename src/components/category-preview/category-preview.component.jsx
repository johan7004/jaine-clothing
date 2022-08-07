import React from "react";
import { Link } from "react-router-dom";
import ProductCards from "../product-card/product-cards.component";
import "./category-preview.styles.css";
export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCards key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}
