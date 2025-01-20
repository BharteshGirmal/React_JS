import { ACTIONS } from ".";


export default function WishlistReducer(state=[], action){
      const { type, payload } = action;
      // As We are using seprate reducers we dont want to spraed the object we can return directly
      switch (type) {
        case ACTIONS.WISHLIST_ADD:
          // Add the item to the wishlist
          return [...state, payload];
    
        case ACTIONS.WISHLIST_REMOVE:
          // Remove the item from the wishlist based on the productId
          return state.filter((ele) => ele.productId !== payload.productId);
    
       default:
          return state;
      }
}