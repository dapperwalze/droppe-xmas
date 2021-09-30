export const APPROVE_WISHLIST = "APPROVE_WISHLIST";

export const approveWishlist = (amount: number) => ({
  type: APPROVE_WISHLIST,
  payload: amount,
});
