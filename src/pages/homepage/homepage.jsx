import Carrossel from "../../components/carrossel/carrossel";
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
    </div>
  );
}

export default Homepage;
