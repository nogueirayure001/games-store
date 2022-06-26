import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.actions";
import { userStateObserver } from "./utils/firebase/auth";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/navigation";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Search from "./pages/search/search";
import Checkout from "./pages/checkout/checkout";
import SignUp from "./pages/sign-up/sign-up";

function AppRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = userStateObserver((user) => {
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='search/*' element={<Search />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
