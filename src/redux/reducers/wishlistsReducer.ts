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
  const cartId = action.payload?.cartId;
  const cartIndex = state.carts.findIndex((cart) => cart?.id === cartId);
  const getCart = state.carts[cartIndex];
  const getProducts = getCart?.products?.filter(
    (product: Record<string, any>) =>
      product.productId !== action.payload?.productId
  );
  const filteredResult = state.carts.filter(
    (cart: Record<string, any>) => cart?.id !== cartId && getProducts
  );
  console.log({ cartIndex });
  console.log({ cartId });
  console.log({ getCart });
  console.log({ getProducts });
  console.log({ filteredResult });

  switch (action.type) {
    case actions.GET_WISHLISTS:
      return { ...state, isLoading: true };
    case actions.GET_WISHLISTS_SUCCESS:
      return { carts: action.payload, isLoading: false, hasErrors: false };
    case actions.GET_WISHLISTS_FAILURE:
      return { ...state, isLoading: false, hasErrors: true };
    case actions.DELETE_FROM_WISHLIST:
      return Object.assign({}, state, { carts: filteredResult });

    default:
      return state;
  }
};
export const wishlistsSelector = (state: { wishlists: any }) => state.wishlists;

export default wishlistsReducer;
