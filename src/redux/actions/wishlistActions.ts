import axios from "axios";

export const APPROVE_WISHLIST = "APPROVE_WISHLIST";
export const APPROVE_WISHLIST_SUCCESS = "APPROVE_WISHLIST_SUCCESS";
export const APPROVE_WISHLIST_FAILURE = "APPROVE_WISHLIST_FAILURE";
export const SAVE_SETTINGS = "SAVE_SETTINGS";
export const SAVE_SETTINGS_SUCCESS = "SAVE_SETTINGS_SUCCESS";
export const SAVE_SETTINGS_FAILURE = "SAVE_SETTINGS_FAILURE";

export const approveWishlist = (cart: Record<string, any>) => ({
  type: APPROVE_WISHLIST,
  payload: cart,
});

export const approveWishlistSuccess = () => ({
  type: APPROVE_WISHLIST_SUCCESS,
});

export const approveWishlistFailure = () => ({
  type: APPROVE_WISHLIST_FAILURE,
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

export function saveCart(cart: Record<string, any>) {
  return async (dispatch: (arg: any) => any) => {
    dispatch(approveWishlist(cart));

    try {
      await axios
        .put(`https://fakestoreapi.com/carts/${cart.id}`, cart)
        .then((response) => {});
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
}
