import "./category.styles.css";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "./../../components/contexts/categories.context";
import { useParams } from "react-router";
import ProductCards from "../../components/product-card/product-cards.component";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
