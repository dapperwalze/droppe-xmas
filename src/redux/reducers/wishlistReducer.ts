import * as actions from "../actions/wishlistActions";

interface wishlistState {
  approvedWishlists: Record<string, any>[];
  hasErrors: boolean;
}

const initialState: wishlistState = {
  approvedWishlists: [],
  hasErrors: false,
};

export type Action = {
  type: string;
  payload?: any;
};

const wishlistReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.APPROVE_WISHLIST:
    case actions.APPROVE_WISHLIST_SUCCESS:
      return {
        ...state,
        approvedWishlists: state.approvedWishlists.concat(action.payload),
        hasErrors: false,
      };
    case actions.APPROVE_WISHLIST_FAILURE:
      return { ...state, hasErrors: true };

    default:
      return state;
  }
};
export const wishlistSelector = (state: { approvedWishlists: any }) =>
  state.approvedWishlists;

export default wishlistReducer;
