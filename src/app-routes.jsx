import React, { useContext, useEffect } from "react";
import { userStateObserver } from "./utils/firebase/auth";
import { UserContext } from "./contexts/user-context";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/navigation";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Search from "./pages/search/search";
import Checkout from "./pages/checkout/checkout";
import SignUp from "./pages/sign-up/sign-up";

function AppRoutes() {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = userStateObserver((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [setCurrentUser]);

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
