import { React, useContext } from "react";
import { CartStatusContext } from "./../contexts/cart-open.context";
import "./cart-icon.style.css";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartStatusContext);

  const toggleCartStatus = () => {
    !isCartOpen ? setIsCartOpen(true) : setIsCartOpen(false);
  };

  return (
    <div className="cart-icon-container"  onClick={toggleCartStatus}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
