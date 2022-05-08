import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/navigation";
import Homepage from "./pages/homepage/homepage";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
