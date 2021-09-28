import axios from "axios";
export const GET_CARTS = "GET_CARTS";
export const GET_CARTS_SUCCESS = "GET_CARTS_SUCCESS";
export const GET_CARTS_FAILURE = "GET_CARTS_FAILURE";

export const getCarts = () => ({
  type: GET_CARTS,
});

export const getCartsSuccess = (carts: Record<string, any>[]) => ({
  type: GET_CARTS_SUCCESS,
  payload: carts,
});

export const getCartsFailure = () => ({
  type: GET_CARTS_FAILURE,
});

export function fetchCarts() {
  return async (dispatch: (arg: any) => any) => {
    dispatch(getCarts());

    try {
      axios
        .get("https://fakestoreapi.com/products?limit=5")
        .then((response) => {
          const { data } = response;
          dispatch(getCartsSuccess(data));
        });
    } catch (error) {
      dispatch(getCartsFailure());
    }
  };
}
