import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
//   Boolean
// );

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

/*
  [3]

  The store contains all reducers so it's the single source of truth.

  We use applyMiddleware to enhance the code with different middlewares such as logger here to give you feedback about the state.
  
*/
