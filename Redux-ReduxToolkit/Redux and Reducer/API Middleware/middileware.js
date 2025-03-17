const BASE_URL = "https://fakestoreapi.com";
import { store } from "../store";

export const API_Middileware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    console.log(store);
    console.log(next);
    console.log(action);
    console.log("action.type :" + action.type);

    if (action.type === "apicalls") {
      next(action);
      const { url, onStart, onSuccess, onError } = action.payload;
      console.log(`${BASE_URL}/${url}`);

      dispatch({ type: onStart });
      fetch(`${BASE_URL}/${url}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: onSuccess, payload: data });
        })
        .catch((error) => {
          dispatch({ type: onError, payload: error });
        });
    } else {
      next(action);
    }
  };
