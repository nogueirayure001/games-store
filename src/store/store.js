import { compose, applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { persistedReducer } from "./root.reducer";

const middlewares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, enhancers);

export const persistor = persistStore(store);
