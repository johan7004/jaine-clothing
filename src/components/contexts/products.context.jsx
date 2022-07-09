import { useState, createContext } from "react";
import PRODUCTS from '../../assets/shop-data.json' 

export const ProductContext = createContext({
    products:[],
    setCurrentUser: () => null,
  });

  export const ProductProvider =({children})=>{

    const [products, setProducts]=useState(PRODUCTS)
    const value = {products}

    return (<ProductContext.Provider value={products}>{children}</ProductContext.Provider>)


  }
  