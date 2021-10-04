import { combineReducers } from "redux";
import allProductsReducer from "./allProductsReducer";
import walletReducer from "./walletReducer";
import cartsReducer from "./wishlistsReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  wishlists: cartsReducer,
  wishlist: wishlistReducer,
  wallet: walletReducer,
});

export default rootReducer;
