import { combineReducers } from "redux";
import cartsReducer from "./cartsReducer";

const rootReducer = combineReducers({
  carts: cartsReducer,
});

export default rootReducer;
