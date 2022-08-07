import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains product to add

  const existingCartItems = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });
  // if found, increment quantity

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    console.log(`item does not exist in cart`);
  }

  // return new array with modified cartItems/ new cart item

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const decreaseCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains product to add

  const existingCartItems = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });
  // if found, increment quantity

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.quantity >= 2 && cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    console.log(`item does not exist in cart`);
  }

  // return new array with modified cartItems/ new cart item

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartStatusContext = createContext({
  cartStatus: [],
  setCartStatus: () => null,
  cartitems: [],
  addItemtoCart: () => {},
  cartCount: 0,
});

export const CartOpenStatusProvider = ({ children }) => {
  const [cartStatus, setCartStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseItemFromCart = (productToAdd) => {
    setCartItems(decreaseCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToAdd) => {
    console.log(productToAdd.name);
    let removedArray = cartItems.filter((value) => {
      return value.name !== productToAdd.name;
    });
    setCartItems(removedArray);
  };
  const value = {
    cartStatus,
    setCartStatus,
    addItemToCart,
    cartItems,
    cartCount,
    decreaseItemFromCart,
    removeItemFromCart,
  };

  return (
    <CartStatusContext.Provider value={value}>
      {children}
    </CartStatusContext.Provider>
  );
};
