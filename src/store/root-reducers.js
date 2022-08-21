import { combineReducers } from "redux";
import { userReducer } from "./User/user-reducer";
import { categoriesReducer } from "./categories/categories.reducer";
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
