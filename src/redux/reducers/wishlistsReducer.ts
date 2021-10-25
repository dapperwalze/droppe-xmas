import * as actions from "../actions/wishlistsActions";
import _ from "lodash";

interface WishlistsState {
  carts: Record<string, any>[];
  discardedItems: Record<string, any>[];
  isLoading: boolean;
  hasErrors: boolean;
}

const initialState: WishlistsState = {
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
      return Object.assign({}, state, { isLoading: true });
    case actions.GET_WISHLISTS_SUCCESS:
      return Object.assign({}, state, {
        carts: action.payload,
        isLoading: false,
      });
    case actions.GET_WISHLISTS_FAILURE:
      return Object.assign({}, state, {
        hasErrors: true,
        isLoading: false,
      });
    case actions.DELETE_FROM_WISHLIST:
      return Object.assign({}, state, {
        carts: clonedCart,
        discardedItems: state.discardedItems.concat(discardedItem),
      });

    default:
      return state;
  }
};
export const wishlistsSelector = (state: any) => state.wishlists;

export default wishlistsReducer;
