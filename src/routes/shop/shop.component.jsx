import { React } from "react";
import ProductCard from "./../../components/product-card/product-cards.component";
import SHOP_DATA from "../../assets/shop-data.json";
import './shop.style.css'

export default function Shop() {
 
  return (
    <div className="products-container">
      {SHOP_DATA.map((product) => {
        return <ProductCard key={product.id} name={product.name} product={product} />;
      })}
    </div>
  );
}
