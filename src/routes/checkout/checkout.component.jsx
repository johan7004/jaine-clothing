import { React, useContext } from "react";
import { CartStatusContext } from "../../components/contexts/cart-open.context";
export default function Checkout() {
  const { cartItems, addItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartStatusContext);



  return (
    <div>
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            <img src={cartItem.imageUrl} alt={cartItem.name} />
            <p>{cartItem.name}</p>
            <p>
              <button onClick={() => decreaseItemFromCart(cartItem)}>----</button>
              {cartItem.quantity}
              <button onClick={() => addItemToCart(cartItem)}>+</button> x $
              {cartItem.price} = {cartItem.quantity * cartItem.price}
              <button onClick={() => removeItemFromCart(cartItem)}>Remove Item</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}
