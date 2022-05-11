import CarrosselFrame from "../carrossel-frame/carrossel-frame";
import CarrosselMultiFrame from "../carrossel-multi-frame/carrossel-multi-frame";
import { Title, CarrosselContainer } from "./carrossel.styles";

function Carrossel({
  games,
  title,
  configs,
  carrosselType = "default",
  splitValue,
}) {
  const CARROSSEL = {
    default: <CarrosselFrame games={games} configs={configs} />,
    multiItem: (
      <CarrosselFrame
        games={games}
        configs={configs}
        splitValue={splitValue}
        frameType={carrosselType}
      />
    ),
    multiFrame: <CarrosselMultiFrame games={games} configs={configs} />,
  };

  return (
    <CarrosselContainer>
      <Title carrosselType={carrosselType}>{title}</Title>

      {CARROSSEL[carrosselType]}
    </CarrosselContainer>
  );
}

export default Carrossel;
