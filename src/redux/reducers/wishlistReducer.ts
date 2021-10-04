import * as actions from "../actions/wishlistActions";

interface wishlistState {
  approvedWishlists: Record<string, any>[];
  userSettings: Record<string, any>;
  hasErrors: boolean;
}

const initialState: wishlistState = {
  approvedWishlists: [],
  userSettings: {
    username: "",
    limitPerWishlist: 0,
    isSettingsSaved: false,
  },
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

    case actions.SAVE_SETTINGS:
    case actions.SAVE_SETTINGS_SUCCESS:
      return {
        ...state,
        userSettings: action.payload,
      };
    case actions.SAVE_SETTINGS_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
export const wishlistSelector = (state: { wishlist: any }) => state.wishlist;

export default wishlistReducer;
