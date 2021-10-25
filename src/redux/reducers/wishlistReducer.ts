import * as actions from "../actions/wishlistActions";

interface WishlistState {
  approvedWishlists: Record<string, any>[];
  hasErrors: boolean;
  userSettings: Record<string, any>;
  amountAfterDiscount: number;
}

const initialState: WishlistState = {
  approvedWishlists: [],
  hasErrors: false,
  userSettings: {
    username: "",
    limitPerWishlist: 0,
    isSettingsSaved: false,
  },
  amountAfterDiscount: 0,
};

export type Action = {
  type: string;
  payload?: any;
};

const wishlistReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.APPROVE_WISHLIST:
      return Object.assign({}, state);
    case actions.APPROVE_WISHLIST_SUCCESS:
      return Object.assign({}, state, {
        approvedWishlists: state.approvedWishlists.concat(action.payload),
        hasErrors: false,
      });
    case actions.APPROVE_WISHLIST_FAILURE:
      return Object.assign({}, state, { hasErrors: true });

    case actions.SET_AMOUNT_AFTER_DISCOUNT:
      return Object.assign({}, state, { amountAfterDiscount: action.payload });

    case actions.SAVE_SETTINGS:
    case actions.SAVE_SETTINGS_SUCCESS:
      return Object.assign({}, state, { userSettings: action.payload });

    case actions.SAVE_SETTINGS_FAILURE:
      return Object.assign({}, state, state.userSettings);
    default:
      return state;
  }
};
export const wishlistSelector = (state: { wishlist: any }) => state.wishlist;

export default wishlistReducer;
