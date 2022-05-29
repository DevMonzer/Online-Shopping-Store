import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
});

/*
  [2]

  The root reducer file contains all reducers combined together so we later pass it to the redux store.

*/
