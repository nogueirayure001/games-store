import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/navigation";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Search from "./pages/search/search";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='search/*' element={<Search />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
