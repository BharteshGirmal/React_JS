import { combineReducers, createStore } from "redux";
console.log(createStore);
import { ProductsList } from "./productsList";
import ProductsReducer from "./productReducer";
import CartReducer, {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "./cartReducer";
import WishlistReducer from "./wishListReducer";
import { produce } from "immer";
import { configureStore } from "@reduxjs/toolkit";
import { API_Middileware } from "../API Middleware/middileware";
import { thunkMiddleware } from "../API Middleware/ThunkMiddleware";

// const initialState = {
//   products: ProductsList,
//   cartItem: [],
//   wishList: [],
// };

export const ACTIONS = {
  ADD_TO_CART: "cart/addItem",
  REMOVE_FROM_CART: "cart/removeItem",
  WISHLIST_ADD: "cart/wishlistAddItem",
  WISHLIST_REMOVE: "cart/wishlistRemoveItem",
  INCRASE_QTY: "cart/increaseQty",
  DECRASE_QTY: "cart/decreaseQty",
};

// function reducerFunction(state = initialState, action) {
//   const { type, payload } = action;
//   console.log(payload);

//   switch (type) {
//     case ACTIONS.ADD_TO_CART:
//       return { ...state, cartItem: [...state.cartItem, payload] };

//     case ACTIONS.REMOVE_FROM_CART:
//       return {
//         ...state,
//         cartItem: state.cartItem.filter(
//           (ele) => ele.productId !== payload.productId
//         ),
//       };

//     case ACTIONS.INCRASE_QTY:
//       return {
//         ...state,
//         cartItem: state.cartItem.map((ele) => {
//           if (ele.productId === payload.productId) {
//             return { ...ele, quantity: (ele.quantity += payload.quantity) };
//           }
//           return ele;
//         }),
//       };
//     case ACTIONS.DECRASE_QTY:
//       return {
//         ...state,
//         cartItem: state.cartItem
//           .map((ele) => {
//             if (ele.productId === payload.productId) {
//               return { ...ele, quantity: (ele.quantity -= payload.quantity) };
//             }
//             return ele;
//           })
//           .filter((cartItem) => cartItem.quantity > 0),
//       };
//     case ACTIONS.WISHLIST_ADD:
//       return { ...state, wishList: [...state.wishList, payload] };
//     case ACTIONS.WISHLIST_REMOVE:
//       return {
//         ...state,
//         wishList: state.wishList.filter(
//           (ele) => ele.productId === payload.productId
//         ),
//       };
//     default:
//       return state;
//   }
// }

const MultipleReducers = combineReducers({
  products: ProductsReducer,
  cartItem: CartReducer,
  wishList: WishlistReducer,
});

const MultipleReducers2 = CustomCombineReducer({
  products: ProductsReducer,
  cartItem: CartReducer,
  wishList: WishlistReducer,
});

function CustomCombineReducer(reducers) {
  const reducerKeys = Object.keys(reducers);
  console.log(reducerKeys);
  return function (state = {}, action) {
    const NextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      // create a reducer
      const reducer = reducers[key];
      const prevStateKey = state[key];
      const nextStateKey = reducer(prevStateKey, action);
      NextState[key] = nextStateKey;
    }
    return NextState;
  };
}

// Traditional Method Redux createStore
// export const store = createStore(
//   MultipleReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__?.()
// );

// Middilewares

function loogger(store) {
  return function (next) {
    return function (action) {
      console.log("Store: ", store);
      console.log("next: ", next);
      console.log("action: ", action);
    };
  };
}

const LoggerFun = (store) => (next) => (action) => {
  console.log("Store State Before Action: ", store.getState());
  console.log("Dispatching Action: ", action);

  // Pass the action to the next middleware or reducer
  const result = next(action);

  console.log("Store State After Action: ", store.getState());

  // Return the result in case it's needed
  return result;
};

// Redux toolKit menthod configureStore

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cartItem: CartReducer,
    wishList: WishlistReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    thunkMiddleware,
    API_Middileware,
  ],
});

// console.log(store.getState());

// // subscribe the action done by reducer funtion when state changes
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({
//   type: ACTIONS.ADD_TO_CART,
//   payload: { productId: 1, quantity: 1 },
// });
// store.dispatch({
//   type: ACTIONS.ADD_TO_CART,
//   payload: { productId: 2, quantity: 11 },
// });
// store.dispatch({
//   type: ACTIONS.ADD_TO_CART,
//   payload: { productId: 4, quantity: 15 },
// });
// store.dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: { productId: 1 } });

// // Actiom Creators
// store.dispatch(increaseItemQuantity(4,100));
// store.dispatch(decreaseItemQuantity(4));

// // store.dispatch({
// //   type: ACTIONS.INCRASE_QTY,
// //   payload: { productId: 4, quantity: 30 },
// // });

// store.dispatch({ type: ACTIONS.WISHLIST_ADD, payload: { productId: 4 } });
// store.dispatch({ type: ACTIONS.WISHLIST_ADD, payload: { productId: 2 } });
// store.dispatch({ type: ACTIONS.WISHLIST_REMOVE, payload: { productId: 4 } });
