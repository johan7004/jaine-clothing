import "./product-cards.styles.css";
import { CartStatusContext } from "./../contexts/cart-open.context";
import { React, useContext } from "react";
import Button, {BUTTON_TYPE_COLORS} from "../buttons/button.component";

export default function ProductCards({ product }) {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartStatusContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_COLORS.inverted} onClick={addProductToCart}>
        {" "}
        Add to Cart
      </Button>
    </div>
  );
}
