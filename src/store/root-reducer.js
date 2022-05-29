import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});

/*
  [2]

  The root reducer file contains all reducers combined together so we later on pass it to the redux store.

*/
