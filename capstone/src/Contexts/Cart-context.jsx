import React, { createContext, useEffect, useState } from 'react'
import CartItem from '../Components/Cart-item/cart-item.component';


export const CartContext = createContext({
      isCartOpen:false,
      setIsCartOpen:()=>{},
      cartItems:[],
      addItemsToCart:()=>{},
      removeCartItem:()=>{},
      clearCartItem:()=>{},
      cartCount:0,
      cartTotal:0,
});

const addCartItem = (cartitems, productToAdd)=>{
  const exsitingCartItem = cartitems.find((item)=>{
      return item.id === productToAdd.id;
  });

  if(exsitingCartItem){
    return cartitems.map((cartitem)=> cartitem.id === productToAdd.id ? {...cartitem, quantity:cartitem.quantity + 1}:cartitem);
  }

  return [...cartitems, {...productToAdd, quantity:1}];

}

const removeFromcart = (cartitems, itemToRemove)=>{
  const exsitingCartItem = cartitems.find((item)=>{
      return item.id === itemToRemove.id;
  });

  if(exsitingCartItem.length === 1){
    return cartitems.filter((cartitem)=>cartitem.id !== itemToRemove.id);
  }

  return cartitems.map((cartitem)=> cartitem.id === itemToRemove.id ? {...cartitem, quantity:cartitem.quantity - 1}:cartitem);

}
const clearCartItem = (cartitems, itemToRemove)=>{
    return cartitems.filter((cartitem)=>cartitem.id !== itemToRemove.id);
}

export  function CartProvider({children}) {
const [isCartOpen, setIsCartOpen] = useState(false);
const [cartItems, setCartItems] = useState([]);
const [cartCount, setCartCount] = useState(0);
const [cartTotal, setCartTotal] = useState(0);

// call this hook whnever tha cartItems changes 
useEffect(()=>{
  const newCartCount = cartItems.reduce((total, cartitem)=> total + cartitem.quantity , 0);

  setCartCount(newCartCount);

}, [cartItems]);

useEffect(()=>{
  const newCartTotal = cartItems.reduce((total, cartitem)=> total + cartitem.quantity * cartitem.price , 0);

  setCartTotal(newCartTotal);

}, [cartItems]);

const addItemsToCart= (productToAdd)=>{
  setCartItems(addCartItem(cartItems,productToAdd ));
}

const removeCartItem = (productToAdd)=>{
  setCartItems(removeFromcart(cartItems,productToAdd ));
}

const ClearCartItem = (productToAdd)=>{
  setCartItems(clearCartItem(cartItems,productToAdd ));
}
const value = {isCartOpen, setIsCartOpen, addItemsToCart,removeCartItem,ClearCartItem, cartItems, cartCount, cartTotal};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
