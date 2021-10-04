import * as actions from "../actions/wishlistsActions";
import _ from "lodash";

interface wishlistsState {
  carts: Record<string, any>[];
  discardedItems: Record<string, any>[];
  isLoading: boolean;
  hasErrors: boolean;
}

const initialState: wishlistsState = {
  carts: [],
  discardedItems: [],
  isLoading: false,
  hasErrors: false,
};

export type Action = {
  type: string;
  payload?: any;
};

const wishlistsReducer = (state = initialState, action: Action) => {
  const clonedCart = [...state.carts];
  const cartId = action.payload?.cartId;
  const cartIndex = clonedCart.findIndex((cart) => cart?.id === cartId);
  clonedCart[cartIndex] = { ...clonedCart[cartIndex] };
  const storedCart = { ...clonedCart[cartIndex] };
  clonedCart[cartIndex].products = clonedCart[cartIndex].products?.filter(
    (product: Record<string, any>) =>
      product.productId !== action.payload?.productId
  );

  const discardedItem = _.remove(
    storedCart.products,
    (product: Record<string, any>) =>
      product.productId === action.payload?.productId
  );

  switch (action.type) {
    case actions.GET_WISHLISTS:
      return { ...state, discardedItems: [], isLoading: true };
    case actions.GET_WISHLISTS_SUCCESS:
      return {
        carts: action.payload,
        discardedItems: [],
        isLoading: false,
        hasErrors: false,
      };
    case actions.GET_WISHLISTS_FAILURE:
      return {
        ...state,
        discardedItems: [],
        isLoading: false,
        hasErrors: true,
      };
    case actions.DELETE_FROM_WISHLIST:
      return {
        ...state,
        carts: clonedCart,
        discardedItems: state.discardedItems.concat(discardedItem),
      };
    default:
      return state;
  }
};
export const wishlistsSelector = (state: { wishlists: any }) => state.wishlists;

export default wishlistsReducer;