import CarrosselFrame from "../carrossel-frame/carrossel-frame";
import { Title, CarrosselContainer } from "./carrossel.styles";

function Carrossel({ configs }) {
  return (
    <CarrosselContainer>
      <Title>The best action games on sale!</Title>

      <CarrosselFrame {...configs} />
    </CarrosselContainer>
  );
}

export default Carrossel;
