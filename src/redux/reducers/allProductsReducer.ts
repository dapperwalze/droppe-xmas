import * as actions from "../actions/productActions";

interface wishlistsState {
  allProducts: Record<string, any>[];
  isLoading: boolean;
  hasErrors: boolean;
}

const initialState: wishlistsState = {
  allProducts: [],
  isLoading: false,
  hasErrors: false,
};

export type Action = {
  type: string;
  payload?: any;
};

const allProductsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return { ...state, isLoading: true };
    case actions.GET_PRODUCTS_SUCCESS:
      return {
        allProducts: action.payload,
        isLoading: false,
        hasErrors: false,
      };
    case actions.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, hasErrors: true };
    default:
      return state;
  }
};
export const allProductsSelector = (state: { allProducts: any }) =>
  state.allProducts;

export default allProductsReducer;
