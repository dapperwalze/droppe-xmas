import * as actions from "../actions/wishlistActions";

interface wishlistState {
  approvedWishlist: Record<string, any>[];
  isLoading: boolean;
  hasErrors: boolean;
}

const initialState: wishlistState = {
  approvedWishlist: [],
  isLoading: false,
  hasErrors: false,
};

export type Action = {
  type: string;
  payload?: any;
};

const wishlistReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.APPROVE_WISHLIST:
      return { ...state, isLoading: true };
    // case actions.GET_WISHLISTS_SUCCESS:
    //   return { carts: action.payload, isLoading: false, hasErrors: false };
    // case actions.GET_WISHLISTS_FAILURE:
    //   return { ...state, isLoading: false, hasErrors: true };

    default:
      return state;
  }
};
export const wishlistSelector = (state: { approvedWishlist: any }) =>
  state.approvedWishlist;

export default wishlistReducer;
