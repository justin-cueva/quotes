import { combineReducers } from "redux";

import authReducer from "./authReducer";
import favoritesReducer from "./favoritesReducer";

export default combineReducers({
  favorites: favoritesReducer,
  auth: authReducer,
});
