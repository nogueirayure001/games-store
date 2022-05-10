import { useState } from "react";
import {
  Image,
  GameCardContainer,
  GameInfo,
  Name,
  Price,
  AddToCartButton,
} from "./game-card.styles";

function GameCard({ game }) {
  const { name, background_image } = game;

  const [price] = useState((Math.random() * 60 + 40).toFixed(2));

  return (
    <GameCardContainer>
      <AddToCartButton type='button' />
      <Image image={background_image} />
      <GameInfo>
        <Name>{name}</Name>
        <Price>$ {price}</Price>
      </GameInfo>
    </GameCardContainer>
  );
}

export default GameCard;
