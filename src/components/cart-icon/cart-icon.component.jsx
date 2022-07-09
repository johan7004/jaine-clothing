import { React, useContext } from "react";
import { CartStatusContext } from "./../contexts/cart-open.context";
import "./cart-icon.style.css";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
export default function CartIcon() {
  const { cartStatus, setCartStatus } = useContext(CartStatusContext);

  const toggleCartStatus = () => {
    !cartStatus ? setCartStatus(true) : setCartStatus(false);
  };

  return (
    <div className="cart-icon-container"  onClick={toggleCartStatus}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
