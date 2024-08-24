import React, { createContext, useState } from 'react'
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
      PRODUCTS:[],
}
);

export function ProductsProvider({children}) {
const [products, setProducts]= useState(PRODUCTS);
const value={products};

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}