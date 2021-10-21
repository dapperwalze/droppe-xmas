import axios from "axios";

export const GET_WISHLISTS = "GET_WISHLISTS";
export const GET_WISHLISTS_SUCCESS = "GET_WISHLISTS_SUCCESS";
export const GET_WISHLISTS_FAILURE = "GET_WISHLISTS_FAILURE";
export const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";

export const getWishLists = () => ({
  type: GET_WISHLISTS,
});

export const getWishListsSuccess = (carts: Record<string, any>[]) => ({
  type: GET_WISHLISTS_SUCCESS,
  payload: carts,
});

export const getWishListsFailure = () => ({
  type: GET_WISHLISTS_FAILURE,
});

export const deleteFromWishList = (cartId: number, productId: number) => ({
  type: DELETE_FROM_WISHLIST,
  payload: {
    cartId,
    productId,
  },
});

export const fetchCarts = () => {
  return async (dispatch: (arg: any) => any) => {
    dispatch(getWishLists());

    try {
      const response = await axios.get(
        "https://fakestoreapi.com/carts?limit=5"
      );
      dispatch(getWishListsSuccess(response.data));
    } catch (error: any) {
      if (error.response) {
        dispatch(getWishListsFailure());
      } else if (error.request) {
        dispatch(getWishListsFailure());
      } else {
        dispatch(getWishListsFailure());
      }
      console.log(error);
    }
  };
};
