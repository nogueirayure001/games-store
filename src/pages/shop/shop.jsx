import { Routes, Route } from "react-router-dom";
import GamePage from "../../components/game-page/game-page";

function Shop() {
  return (
    <Routes>
      <Route path=':id' element={<GamePage />} />
    </Routes>
  );
}

export default Shop;
