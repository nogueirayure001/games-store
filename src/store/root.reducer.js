import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { colorModeReducer } from "./color-mode/color-mode.reducer";

const persistConfigs = {
  key: "root",
  storage,
  blacklist: ["user", "cart"],
};

const cartConfig = {
  key: "cart",
  storage,
  blacklist: ["cartShowing"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: persistReducer(cartConfig, cartReducer),
  colorMode: colorModeReducer,
});

export const persistedReducer = persistReducer(persistConfigs, rootReducer);
