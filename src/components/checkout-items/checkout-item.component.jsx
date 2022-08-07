import "./checkout-items.styles.css";
import { CartStatusContext } from "./../contexts/cart-open.context";
import { useContext } from "react";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, decreaseItemFromCart, removeItemFromCart } =
    useContext(CartStatusContext);

  const removeCartItemHandler = () => removeItemFromCart(cartItem);
  const decreaseCartItemHandler = () => decreaseItemFromCart(cartItem);
  const addCartItemHandler = () => addItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseCartItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addCartItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
}
