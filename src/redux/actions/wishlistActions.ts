import axios from "axios";

export const APPROVE_WISHLIST = "APPROVE_WISHLIST";
export const APPROVE_WISHLIST_SUCCESS = "APPROVE_WISHLIST_SUCCESS";
export const APPROVE_WISHLIST_FAILURE = "APPROVE_WISHLIST_FAILURE";
export const SET_AMOUNT_AFTER_DISCOUNT = "SET_AMOUNT_AFTER_DISCOUNT";
export const SAVE_SETTINGS = "SAVE_SETTINGS";
export const SAVE_SETTINGS_SUCCESS = "SAVE_SETTINGS_SUCCESS";
export const SAVE_SETTINGS_FAILURE = "SAVE_SETTINGS_FAILURE";

export const approveWishlist = () => ({
  type: APPROVE_WISHLIST,
});

export const approveWishlistSuccess = (cart: Record<string, any>) => ({
  type: APPROVE_WISHLIST_SUCCESS,
  payload: cart,
});

export const approveWishlistFailure = () => ({
  type: APPROVE_WISHLIST_FAILURE,
});

export const setAmountAfterDiscount = (amount: number) => ({
  type: SET_AMOUNT_AFTER_DISCOUNT,
  payload: amount,
});

export const saveSettings = (
  limitPerWishlist: number,
  username: string,
  isSettingsSaved: boolean
) => ({
  type: SAVE_SETTINGS,
  payload: {
    limitPerWishlist,
    username,
    isSettingsSaved,
  },
});

export const saveSettingsSuccess = () => ({
  type: SAVE_SETTINGS_SUCCESS,
});

export const saveSettingsFailure = () => ({
  type: SAVE_SETTINGS_FAILURE,
});

export const saveCart = (cart: Record<string, any>) => {
  return (dispatch: (arg: any) => any) => {
    dispatch(approveWishlist());

    try {
      axios
        .put(`https://fakestoreapi.com/carts/${cart.id}`, cart)
        .then((response) => {
          dispatch(approveWishlistSuccess(response.data));
        });
    } catch (error: any) {
      if (error.response) {
        dispatch(approveWishlistFailure());
      } else if (error.request) {
        dispatch(approveWishlistFailure());
      } else {
        dispatch(approveWishlistFailure());
      }
      console.log(error);
    }
  };
};
