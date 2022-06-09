import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode-context";
import { StylesContextProvider } from "./contexts/styles-context";
import { CartContextProvider } from "./contexts/cart-context";
import { ScreenTypeContextProvider } from "./contexts/screen-type-context";
import AppRoutes from "./app-routes";

import "./reset.css";
import "./index.css";
import { UserContextProvider } from "./contexts/user-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ColorModeContextProvider>
      <StylesContextProvider>
        <UserContextProvider>
          <CartContextProvider>
            <ScreenTypeContextProvider>
              <AppRoutes />
            </ScreenTypeContextProvider>
          </CartContextProvider>
        </UserContextProvider>
      </StylesContextProvider>
    </ColorModeContextProvider>
  </BrowserRouter>
);
