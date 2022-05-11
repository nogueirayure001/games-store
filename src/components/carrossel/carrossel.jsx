import CarrosselFrame from "../carrossel-frame/carrossel-frame";
import { Title, CarrosselContainer } from "./carrossel.styles";

function Carrossel({ children, title, configs }) {
  return (
    <CarrosselContainer>
      <Title>{title}</Title>

      <CarrosselFrame {...configs}>{children}</CarrosselFrame>
    </CarrosselContainer>
  );
}

export default Carrossel;
