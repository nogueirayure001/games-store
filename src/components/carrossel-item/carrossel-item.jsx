import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import {
  CarrosselItemContainer,
  ItemInfo,
  DescriptionContainer,
  Title,
  Stats,
  Rating,
  RatingIcon,
  Value,
  Description,
  AddToCartButton,
} from "./carrossel-item.styles";

function CarrosselItem({ game, heightRatio, showInfo = true }) {
  const { name, background_image, rating, id } = game;

  const [price] = useState((Math.random() * 30 + 20).toFixed(2));

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const navigationHandler = () => navigate(`/shop/${id}`);

  const addToCartHandler = () => addToCart({ ...game, price });

  return (
    <CarrosselItemContainer
      backgroundImage={background_image}
      heightRatio={heightRatio}
      id={id}
    >
      <ItemInfo showInfo={showInfo}>
        <Title onClick={navigationHandler}>{name}</Title>

        <Stats>
          <Rating>
            <RatingIcon />

            <Value>{rating}</Value>
          </Rating>

          <Value>$ {price}</Value>

          <AddToCartButton onClick={addToCartHandler} type='button' />
        </Stats>

        <DescriptionContainer>
          <Description>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Description>
        </DescriptionContainer>
      </ItemInfo>
    </CarrosselItemContainer>
  );
}

export default CarrosselItem;
