import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  AddToCartIcon,
} from "./carrossel-item.styles";
import Button from "../button/button";

function CarrosselItem({ item, heightRatio }) {
  const { name, background_image, rating, id } = item;

  const [price] = useState((Math.random() * 30 + 20).toFixed(2));

  const navigate = useNavigate();

  const handleClick = () => navigate(`/shop/${id}`);

  return (
    <CarrosselItemContainer
      backgroundImage={background_image}
      heightRatio={heightRatio}
    >
      <ItemInfo>
        <Title onClick={handleClick}>{name}</Title>

        <Stats>
          <Rating>
            <RatingIcon />

            <Value>{rating}</Value>
          </Rating>

          <Value>$ {price}</Value>

          <Button type='button'>
            <AddToCartIcon />
          </Button>
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
