import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import {
  fetchProductsData,
  fetchProductsReducer,
  getAllProductList,
  getErrorMessage,
  getIsLoading,
  reduxAsyncThunkFunction,
  showErrorMessage,
  updateProductList,
} from "../store/productReducer";

export default function Home() {
  const productsList = useSelector(getAllProductList);
  const isloading = useSelector(getIsLoading);
  const errorMsg = useSelector(getErrorMessage);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // Temporary state to hold the number of placeholders dynamically
  const [shimmerCount, setShimmerCount] = useState(20);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       dispatch(updateProductList(data));
  //       setShimmerCount(data.length); // Dynamically update based on fetched data
  //       setLoading(false); // Set loading to false after data is fetched
  //     })
  //     .catch((err) => {
  //       dispatch(showErrorMessage(`Unable to fetch data: ${err.message}`));
  //       setLoading(false); // Ensure loading is false on error
  //       console.error(`Unable to fetch data from The API: ${err.message}`);
  //     });
  // }, [dispatch]);

  // Making calls using API Middlewares
  useEffect(() => {
    // dispatch({
    //   type: "apicalls",
    //   payload: {
    //     url: "products",
    //     onStart: fetchProductsReducer.type,
    //     onSuccess: updateProductList.type,
    //     onError: showErrorMessage.type,
    //   },
    // });

    dispatch(reduxAsyncThunkFunction());
  }, [dispatch]);

  // console.log("shimmerCount :" + shimmerCount);

  return (
    <>
      {isloading ? (
        // Render shimmer placeholders dynamically based on shimmerCount
        <div className="shimmer-container products-container">
          {Array.from({ length: shimmerCount }).map((_, index) => (
            <div key={index} className="shimmer-item"></div>
          ))}
        </div>
      ) : errorMsg ? (
        <h1 className="container alert alert-danger bg-warning fs-1">
          {errorMsg}
        </h1>
      ) : (
        // Render the actual product list
        <div className="products-container">
          {productsList.map(({ id, title, rating, price, image }) => (
            <Product
              key={id} // Use id as the key
              productId={id}
              title={title}
              rating={rating?.rate}
              price={price}
              imageUrl={image}
            />
          ))}
        </div>
      )}
    </>
  );
}
