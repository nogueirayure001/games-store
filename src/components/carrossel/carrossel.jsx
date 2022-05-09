import CarrosselFrame from "../carrossel-frame/carrossel-frame";
import { Title, CarrosselContainer } from "./carrossel.styles";

function Carrossel() {
  return (
    <CarrosselContainer>
      <Title>The best action games on sale!</Title>

      <CarrosselFrame width={"100%"} maxWidth={"800px"} heightRatio={"66%"} />
    </CarrosselContainer>
  );
}

export default Carrossel;
