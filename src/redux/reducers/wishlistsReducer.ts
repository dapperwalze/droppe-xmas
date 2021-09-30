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
  const clonedCart = [...state.carts];
  const cartId = action.payload?.cartId;
  const cartIndex = clonedCart.findIndex((cart) => cart?.id === cartId);
  clonedCart[cartIndex] = { ...clonedCart[cartIndex] };
  clonedCart[cartIndex].products = clonedCart[cartIndex].products?.filter(
    (product: Record<string, any>) =>
      product.productId !== action.payload?.productId
  );

  switch (action.type) {
    case actions.GET_WISHLISTS:
      return { ...state, isLoading: true };
    case actions.GET_WISHLISTS_SUCCESS:
      return { carts: action.payload, isLoading: false, hasErrors: false };
    case actions.GET_WISHLISTS_FAILURE:
      return { ...state, isLoading: false, hasErrors: true };
    case actions.DELETE_FROM_WISHLIST:
      return {
        ...state,
        carts: clonedCart,
      };
    default:
      return state;
  }
};
export const wishlistsSelector = (state: { wishlists: any }) => state.wishlists;

export default wishlistsReducer;
