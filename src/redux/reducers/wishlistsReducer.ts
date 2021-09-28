import * as actions from "../actions/wishlistsActions";

interface wishlistsState {
  carts: Record<string, any>[];
  isLoading: boolean;
  hasErrors: boolean;
}

const initialState: wishlistsState = {
  carts: [],
  isLoading: false,
  hasErrors: false,
};

export type Action = {
  type: string;
  payload?: any;
};

const wishlistsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_CARTS:
      return { ...state, isLoading: true };
    case actions.GET_CARTS_SUCCESS:
      return { carts: action.payload, isLoading: false, hasErrors: false };
    case actions.GET_CARTS_FAILURE:
      return { ...state, isLoading: false, hasErrors: true };
    default:
      return state;
  }
};
export const wishlistsSelector = (state: { wishlists: any }) => state.wishlists;

export default wishlistsReducer;
