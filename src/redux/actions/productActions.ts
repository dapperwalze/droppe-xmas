import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccess = (products: Record<string, any>[]) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductsFailure = () => ({
  type: GET_PRODUCTS_FAILURE,
});

export const getAllProducts = () => {
  return async (dispatch: (arg: any) => any) => {
    dispatch(getProducts());

    try {
      await axios.get("https://fakestoreapi.com/products").then((response) => {
        dispatch(getProductsSuccess(response.data));
      });
    } catch (error: any) {
      if (error.response) {
        dispatch(getProductsFailure());
      } else if (error.request) {
        dispatch(getProductsFailure());
      } else {
        dispatch(getProductsFailure());
      }
      console.log(error);
    }
  };
};
