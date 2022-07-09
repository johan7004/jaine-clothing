import React from "react";
import Button from './../buttons/button.component'
import './cart-dropdown.style.css'

export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Checkout</Button>
    </div>
  );
}
