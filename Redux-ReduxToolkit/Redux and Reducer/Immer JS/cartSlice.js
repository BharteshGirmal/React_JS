import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const ACTIONS = {
  ADD_TO_CART: "cart/addItem",
  REMOVE_FROM_CART: "cart/removeItem",
  INCRASE_QTY: "cart/increaseQty",
  DECRASE_QTY: "cart/decreaseQty",
};

// Action creators
export function addToCart(productData) {
  return {
    type: ACTIONS.ADD_TO_CART,
    payload: productData,
  };
}

export function removeFromCart(productId, quantity = 1) {
  return {
    type: ACTIONS.REMOVE_FROM_CART,
    payload: { productId, quantity },
  };
}

export function increaseItemQuantity(productId) {
  console.log(productId);

  return {
    type: ACTIONS.INCRASE_QTY,
    payload: { productId, quantity: 1 },
  };
}

export function decreaseItemQuantity(productId) {
  console.log(productId);

  return {
    type: ACTIONS.DECRASE_QTY,
    payload: { productId, quantity: 1 },
  };
}

// creating slices using redux toolkit

const mySlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const currentIndex = findIndex(state, action);
      if (currentIndex !== -1) {
        state[currentIndex].quantity += 1;
        return state;
      } else {
        state.push({ ...payload, quantity: 1 });
      }
      return state;
    },
    removeItem(state, action) {
      const currentIndex = findIndex(state, action);
      state.splice(currentIndex, 1);
      return state;
    },
    increaseQty(state, action) {
      const currentIndex = findIndex(state, action);
      state[currentIndex].quantity += 1;
      return state;
    },
    decreaseQty(state, action) {
      const currentIndex = findIndex(state, action);
      state[currentIndex].quantity -= 1;
      if (state[currentIndex].quantity === 0) {
        state.splice(currentIndex, 1);
      
      return state;
    },
  },
});

console.log(mySlice);


export default function CartReducer(OriginalState = [], action) {
  const { type, payload } = action;

  return produce(OriginalState, (state) => {
    const currentIndex = state.findIndex(
      (cartItem) => cartItem.productId === payload.productId
    );

    switch (type) {
      case ACTIONS.ADD_TO_CART:
        if (currentIndex !== -1) {
          state[currentIndex].quantity += 1;
          return state;
        }

        state.push({ ...payload, quantity: 1 });
        return state;

      case ACTIONS.REMOVE_FROM_CART:
        state.splice(currentIndex, 1);
        return state;

      case ACTIONS.INCRASE_QTY:
        state[currentIndex].quantity += 1;
        return state;

      case ACTIONS.DECRASE_QTY:
        state[currentIndex].quantity -= 1;
        if (state[currentIndex].quantity === 0) {
          state.splice(currentIndex, 1);
        }
        return state;

      default:
        return state;
    }
  });
}

function findIndex(state, action) {
  const currentIndex = state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

  return currentIndex;
}
