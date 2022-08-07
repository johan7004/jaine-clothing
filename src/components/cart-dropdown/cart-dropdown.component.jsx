import { React, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./../buttons/button.component";
import CartItem from "./../cart-item/cart-item.component";
import { CartStatusContext } from "../contexts/cart-open.context";
import "./cart-dropdown.style.css";

export default function CartDropdown() {
  const { cartItems } = useContext(CartStatusContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button color="primary">
        <Link to="checkout">Checkout</Link>
      </Button>
    </div>
  );
}
