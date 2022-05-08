import Carrossel from "../../components/carrossel/carrossel";
import "./homepage.scss";

function Homepage() {
  return (
    <div className='homepage-container'>
      <Carrossel width={"90%"} maxWidth={"800px"} heightRatio={"66%"} />
    </div>
  );
}

export default Homepage;
