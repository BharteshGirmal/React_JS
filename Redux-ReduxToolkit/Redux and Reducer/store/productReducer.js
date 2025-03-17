import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
// import { ProductsList } from "./productsList";

// function ProductsReducer( state=ProductsList){
//       return state;
// }

// creating Slice using redux toolkit

export const reduxAsyncThunkFunction = createAsyncThunk(
  "products/fetchDatausingThunk",
  async () => {
    try {
      const URLData = await fetch("https://fakestoreapi.com/products");
      return URLData.json();
    } catch (err) {
      console.log(err.message);
      throw new err.message();
    }
  }
);

const slice = createSlice({
  name: "products",
  initialState: {
    loading: true,
    error: "",
    list: [],
  },
  reducers: {
    fetchProductsReducer(state) {
      state.loading = true;
    },
    showErrorMessage(state, action) {
      state.loading = false;

      state.error = `Oops 🐞 Something Went wrong Try after sometime`;
    },
    updateProductList(state, action) {
      state.loading = false;
      state.list = action.payload;
    },
  },

  extraReducers: (builders) => {
    builders
      .addCase(reduxAsyncThunkFunction.pending, (state) => {
        state.loading = true;
      })
      .addCase(reduxAsyncThunkFunction.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(reduxAsyncThunkFunction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const fetchProductsData = () => (dispatch) => {
  dispatch(fetchProductsReducer());
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(updateProductList(data));
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(showErrorMessage(err.message));
    });
};

export const { fetchProductsReducer, showErrorMessage, updateProductList } =
  slice.actions;

export const getAllProductList = (state) => state.products.list;
export const getIsLoading = (state) => state.products.loading;
export const getErrorMessage = (state) => state.products.error;

export default slice.reducer;
