import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import {
  Image,
  GameCardContainer,
  GameInfo,
  Name,
  Price,
  AddToCartButton,
} from "./game-card.styles";

function GameCard({ game }) {
  const { name, id, background_image } = game;

  const [price] = useState((Math.random() * 60 + 40).toFixed(2));

  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const addToCartHandler = () => addToCart({ ...game, price });

  const navigationHandler = () => navigate(`/shop/${id}`);

  return (
    <GameCardContainer onClick={navigationHandler}>
      <AddToCartButton onClick={addToCartHandler} type='button' />

      <Image image={background_image} />

      <GameInfo>
        <Name>{name}</Name>
        <Price>$ {price}</Price>
      </GameInfo>
    </GameCardContainer>
  );
}

export default GameCard;
