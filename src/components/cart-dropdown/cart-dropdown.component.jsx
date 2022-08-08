import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./../buttons/button.component";
import CartItem from "./../cart-item/cart-item.component";
import { CartStatusContext } from "../contexts/cart-open.context";
import "./cart-dropdown.style.css";

export default function CartDropdown() {
  const { cartItems } = useContext(CartStatusContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length?cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        }):`Your Cart Is Empty`}
      </div>
      <Button onClick={goToCheckout}>Checkout</Button>
    </div>
  );
}
