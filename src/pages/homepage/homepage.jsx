import Carrossel from "../../components/carrossel/carrossel";
import GamesSection from "../../components/games-section/games-section";
import "./homepage.scss";

const CARROSSEL_CONFIGS = {
  width: "100%",
  maxWidth: "800px",
  heightRatio: "66%",
};

function Homepage() {
  return (
    <div className='homepage-container'>
      <Carrossel configs={CARROSSEL_CONFIGS} />

      <GamesSection />
    </div>
  );
}

export default Homepage;
