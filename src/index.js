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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ColorModeContextProvider>
      <StylesContextProvider>
        <CartContextProvider>
          <ScreenTypeContextProvider>
            <AppRoutes />
          </ScreenTypeContextProvider>
        </CartContextProvider>
      </StylesContextProvider>
    </ColorModeContextProvider>
  </BrowserRouter>
);
