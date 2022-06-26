import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

const middlewares = [logger];
const enhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancers);
