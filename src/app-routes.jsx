import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/navigation";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}></Route>
    </Routes>
  );
}

export default AppRoutes;
