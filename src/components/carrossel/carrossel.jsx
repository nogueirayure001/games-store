import CarrosselFrame from "../carrossel-frame/carrossel-frame";
import CarrosselItem from "../carrossel-item/carrossel-item";
import ItemsSplitter from "../items-splitter/items-splitter";
import { Title, CarrosselContainer } from "./carrossel.styles";

function Carrossel({
  games,
  title,
  configs,
  carrosselType = "default",
  splitValue,
}) {
  return (
    <CarrosselContainer>
      <Title carrosselType={carrosselType}>{title}</Title>

      {carrosselType === "default" && (
        <CarrosselFrame {...configs}>
          {games.map((game) => (
            <CarrosselItem
              key={game.slug}
              item={game}
              heightRatio={configs.heightRatio}
            />
          ))}
        </CarrosselFrame>
      )}

      {carrosselType === "multi" && (
        <CarrosselFrame {...configs}>
          <ItemsSplitter itemsToSplit={games} splitValue={splitValue} />
        </CarrosselFrame>
      )}
    </CarrosselContainer>
  );
}

export default Carrossel;
