import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./shop-page/shop-page";

function Shop() {
  return (
    <Routes>
      <Route path=':id' element={<ShopPage />} />
    </Routes>
  );
}

export default Shop;
