import { useState, createContext } from "react";

export const CartStatusContext = createContext({
  cartStatus: [],
  setCartStatus: () => null,
});

export const CartOpenStatusProvider = ({ children }) => {
  const [cartStatus, setCartStatus] = useState(false);
  const value = { cartStatus,setCartStatus };

  return (
    <CartStatusContext.Provider value={value}>
      {children}
    </CartStatusContext.Provider>
  );
};
