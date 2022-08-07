import { React, useContext } from "react";
import { CartStatusContext } from "../../components/contexts/cart-open.context";
import CheckoutItem from './../../components/checkout-items/checkout-item.component'
import "./checkout.styles.css";
export default function Checkout() {
  const { cartItems, addItemToCart, decreaseItemFromCart, removeItemFromCart } =
    useContext(CartStatusContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.length !== 0 ? (
        cartItems.map((cartItem) => {
          return (
            <CheckoutItem key= {cartItem.id} cartItem={cartItem} />
          );
        })
      ) : (
        <h1>Cart Empty! Add Items To Cart</h1>
      )}
      <span className="total">Total : 0</span>
    </div>
  );
}

