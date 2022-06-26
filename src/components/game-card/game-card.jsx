import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cart.actions";
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

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addToCartRef = useRef();

  const [price] = useState((Math.random() * 60 + 40).toFixed(2));

  const addToCartHandler = () => dispatch(addToCart({ ...game, price }));

  const navigationHandler = (event) => {
    const { target } = event;
    const { current: addToCart } = addToCartRef;

    if (target !== addToCart && !addToCart.contains(target)) {
      navigate(`/shop/${id}`);
    }
  };

  return (
    <GameCardContainer onClick={navigationHandler}>
      <AddToCartButton
        onClick={addToCartHandler}
        insideRef={addToCartRef}
        type='button'
      />

      <Image image={background_image} />

      <GameInfo>
        <Name>{name}</Name>
        <Price>$ {price}</Price>
      </GameInfo>
    </GameCardContainer>
  );
}

export default GameCard;
