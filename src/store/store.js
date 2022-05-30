import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// Only run this middleWare in development mode
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// Run this if we are not in production mode and we are opening it on a window not server and we have redux extension installed on our browser (it gives us a better experience when it comes to feedback from the redux store)
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

/*

    persistConfig is the config object that will persist the checkout data into the local storage so we don't lose it with the refresh

    blacklist contains the things we don't want to persist such as the user cuz it's comping from the firebase auth 

    we should add this to the index component

*/
