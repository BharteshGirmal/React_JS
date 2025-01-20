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

// Old reducer method using immer
function CartReducer(OriginalState = [], action) {
  const { type, payload } = action;

  return produce(OriginalState, (state) => {
    const currentIndex = state.findIndex(
      (cartItem) => cartItem.productId === payload.productId
    );

    switch (type) {
      case ACTIONS.ADD_TO_CART:
        alert("Item Has been added");
        if (currentIndex !== -1) {
          state[currentIndex].quantity += 1;
        } else {
          state.push({ ...payload, quantity: 1 });
        }
        return state;

      case ACTIONS.REMOVE_FROM_CART:
        if (currentIndex !== -1) {
          state.splice(currentIndex, 1);
        }
        return state;

      case ACTIONS.INCRASE_QTY:
        if (currentIndex !== -1) {
          state[currentIndex].quantity += 1;
        }
        return state;

      case ACTIONS.DECRASE_QTY:
        if (currentIndex !== -1) {
          state[currentIndex].quantity -= 1;
          if (state[currentIndex].quantity === 0) {
            state.splice(currentIndex, 1);
          }
        }
        return state;

      default:
        return state;
    }
  });
}

// Helper function for finding index
function findIndex(state, action) {
  return state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );
}


// New slice using Redux Toolkit
const mySlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const currentIndex = findIndex(state, action);
      if (currentIndex !== -1) {
        state[currentIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 }); 
      }
    },
    removeItem(state, action) {
      const currentIndex = findIndex(state, action);
      if (currentIndex !== -1) {
        state.splice(currentIndex, 1);
      }
    },
    increaseQty(state, action) {
      const currentIndex = findIndex(state, action);
      if (currentIndex !== -1) {
        state[currentIndex].quantity += 1;
      }
    },
    decreaseQty(state, action) {
      const currentIndex = findIndex(state, action);
      if (currentIndex !== -1) {
        state[currentIndex].quantity -= 1;
        if (state[currentIndex].quantity === 0) {
          state.splice(currentIndex, 1);
        }
      }
    },
  },

});

// Export the slice actions and reducer

// Log the created slice for debugging
console.log("CreateSlice:",  mySlice);

export  default mySlice.reducer;

console.log(mySlice.reducer);
