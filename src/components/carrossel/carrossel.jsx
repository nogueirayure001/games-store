import CarrosselFrame from "../carrossel-frame/carrossel-frame";
import { Title, CarrosselContainer } from "./carrossel.styles";

function Carrossel({ children, configs }) {
  return (
    <CarrosselContainer>
      <Title>The best action games on sale!</Title>

      <CarrosselFrame {...configs}>{children}</CarrosselFrame>
    </CarrosselContainer>
  );
}

export default Carrossel;
