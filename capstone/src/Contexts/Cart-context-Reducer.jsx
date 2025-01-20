// import React, { createContext, useEffect, useState } from "react";

// import React from "react";
// import { useReducer } from "react";

// export const CartContext = createContext({
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
//   setIsCartOpen: () => {},
//   addToCart: () => {},
//   removeFromCart: () => {},
//   clearFromTheCart: () => {},
// });

// // Using useReducer hook for state management
// const INITIAL_STATE = {
//   isCartOpen2: false,
//   setIsCartOpen2: () => {},
//   cartItems2: [],
//   cartTotal2: 0,
//   cartCount2: 0,
// };

// const reducerCallbackFunction = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "SET_CART_ITEM":
//       return { ...state, ...payload };

//     case "CART_IS_OPEN":
//       return { ...state, isCartOpen2: payload };

//     default:
//       throw new Error(`undefined action ${type}`);
//   }
// };

// const addItemtoCart = (cartItem, productToAdd) => {
//   const existingItem = cartItem.find((itm, index) => {
//     return itm.id == productToAdd.id;
//   });

//   if (existingItem) {
//     return cartItem.map((catItm) => {
//       catItm.id == productToAdd.id
//         ? { catItm, quantity: catItm.quantity + 1 }
//         : catItm;
//     });
//   }

//   return [...cartItem, { ...productToAdd, quantity: 1 }];
// };

// const removeItemFromCart = (cartItem, itemToRemove) => {
//   const existingItem = cartItem.find((item) => {
//     return item.id == itemToRemove.id;
//   });

//   if (existingItem) {
//     return cartItem.filter((item) => {
//       item.id !== itemToRemove.id;
//     });
//   }

//   return cartItem.map((item) => {
//     item.id === itemToRemove.id
//       ? { ...item, quantity: item.quantity - 1 }
//       : item;
//   });
// };

// const clearItems = (cartItem, itemsToRemove) => {
//   return cartItem.filter((item) => {
//     item.id !== itemsToRemove.id;
//   });
// };

// export default function CartProvider({ children }) {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [cartCount, setCartCount] = useState(0);

//   //useReducer Hook
//   const [{ cartItems2, isCartOpen2, cartTotal2, cartCount2 }, dispatch] =
//     useReducer(reducerCallbackFunction, INITIAL_STATE);

//   const updateReducerState = (newCartItem) => {
//     const newCartCount = newCartItem.reduce((acc, curr) => {
//       return acc + curr.quantity;
//     });

//     const newCartTotal = newCartItem.reduce((acc, curr) => {
//       return acc + curr.quantity + curr.price;
//     });

//     dispatch({
//       type: "SET_CART_ITEM",
//       payload: {
//         cartItems2: newCartItem,
//         cartCount2: newCartCount,
//         cartTotal2: newCartTotal,
//       },
//     });
//   };

//   const setIsCartOpen2 = (bool) => {
//     dispatch({
//       type: "CART_IS_OPEN",
//       payload: bool,
//     });
//   };

//   useEffect(() => {
//     const newCartCount = cartItems.reduce((acc, curr) => {
//       acc + curr.quantity;
//     }, 0);
//     setCartCount(newCartCount);
//   }, [cartItems]);

//   useEffect(() => {
//     const newCartTotal = cartItems.reduce((acc, curr) => {
//       acc + curr.quantity + curr.price;
//     }, 0);
//     setCartTotal(newCartTotal);
//   }, [cartItems]);

//   const addItem = (itemtoAdd) => {
//     setCartItems(addItemtoCart(cartItems, itemtoAdd));
//   };
//   const removeItem = (itemtoRemove) => {
//     setCartItems(removeItemFromCart(cartItems, itemtoRemove));
//   };
//   const clearItem = (itemtoClear) => {
//     setCartItems(clearItems(cartItems, itemtoClear));
//   };

//   const addItem2 = (itemtoAdd) => {
//     const newcartitem = setCartItems(addItemtoCart(cartItems2, itemtoAdd));
//     updateReducerState(newcartitem);
//   };
//   const removeItem2 = (itemtoRemove) => {
//     const newcartitem = setCartItems(
//       removeItemFromCart(cartItems2, itemtoRemove)
//     );
//     updateReducerState(newcartitem);
//   };
//   const clearItem2 = (itemtoClear) => {
//     const newcartitem = setCartItems(clearItems(cartItems2, itemtoClear));
//     updateReducerState(newcartitem);
//   };

//   const value = {
//     addItem,
//     removeItem,
//     clearItem,
//     isCartOpen,
//     setIsCartOpen,
//     cartItems,
//     cartCount,
//     cartTotal,
//   };

//   // this is for the usereducer Value2
//   const value2 = {
//     addItem2,
//     removeItem2,
//     clearItem2,
//     isCartOpen2,
//     setIsCartOpen2,
//     cartItems2,
//     cartCount2,
//     cartTotal2,
//   };
//   console.log(value2);

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// }
