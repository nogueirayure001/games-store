import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { StylesContextProvider } from "./contexts/styles-context";
import { ScreenTypeContextProvider } from "./contexts/screen-type-context";
import AppRoutes from "./app";

import "./reset.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StylesContextProvider>
        <ScreenTypeContextProvider>
          <AppRoutes />
        </ScreenTypeContextProvider>
      </StylesContextProvider>
    </BrowserRouter>
  </Provider>
);
