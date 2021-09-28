import { combineReducers } from "redux";
import walletReducer from "./walletReducer";
import cartsReducer from "./wishlistsReducer";

const rootReducer = combineReducers({
  wishlists: cartsReducer,
  wallet: walletReducer,
});

export default rootReducer;
