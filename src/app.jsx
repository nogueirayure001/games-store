import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.actions";
import { userStateObserver } from "./utils/firebase/auth";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Homepage from "./routes/homepage/homepage";
import Shop from "./routes/shop/shop";
import Search from "./routes/search/search";
import Checkout from "./routes/checkout/checkout";
import SignUp from "./routes/sign-up/sign-up";

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
