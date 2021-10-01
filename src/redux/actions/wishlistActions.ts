export const APPROVE_WISHLIST = "APPROVE_WISHLIST";
export const APPROVE_WISHLIST_SUCCESS = "APPROVE_WISHLIST_SUCCESS";
export const APPROVE_WISHLIST_FAILURE = "APPROVE_WISHLIST_FAILURE";

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
