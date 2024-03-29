import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cart/cart.actions";
import { useFetchGame } from "../../../custom-hooks/use-fetch-game";
import { useFetchGameScreenshots } from "../../../custom-hooks/use-fetch-game-screenshots";
import Button from "../../../components/button/button";
import GameCarrossel from "../../../components/game-carrossel/game-carrossel";
import Loading from "../../../components/loading/loading";

import {
  ShopPageContainer,
  Title,
  Content,
  ControlsAndStats,
  GamePrice,
  ButtonsContainer,
  GameInfoList,
  GameInfoItem,
  InfoItemCategory,
  InfoItemValue,
  FirstContentBlock,
  SecondContentBlock,
  AboutGame,
  AboutGameTitle,
  AboutGameParagraph,
  GameLinkContainer,
} from "./shop-page.styles";

function ShopPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const game = useFetchGame(id);

  const screenshots = useFetchGameScreenshots(id);

  const [price] = useState((Math.random() * 60 + 40).toFixed(2));

  const addToCartHandler = () => dispatch(addToCart({ ...game, price }));

  if (!game) {
    return <Loading />;
  }

  const {
    name,
    metacritic,
    rating,
    released,
    genres,
    description_raw,
    website,
  } = game;

  return (
    <ShopPageContainer>
      <Title>{name}</Title>

      <Content>
        <FirstContentBlock>
          <GameCarrossel
            screenshots={screenshots}
            configs={{
              width: "100%",
              maxWidth: "800px",
              heightRatio: "66%",
            }}
          />

          <ControlsAndStats>
            <GamePrice>$ {price}</GamePrice>

            <ButtonsContainer>
              <Button
                buttonStyle='normalDarkerInverted'
                onClick={addToCartHandler}
              >
                add to cart
              </Button>

              <Button buttonStyle='normalDarker'>buy</Button>
            </ButtonsContainer>

            <GameInfoList>
              <GameInfoItem>
                <InfoItemCategory>metacritic</InfoItemCategory>
                <InfoItemValue>{metacritic}</InfoItemValue>
              </GameInfoItem>
              <GameInfoItem>
                <InfoItemCategory>rating</InfoItemCategory>
                <InfoItemValue>{rating}</InfoItemValue>
              </GameInfoItem>
              <GameInfoItem>
                <InfoItemCategory>released</InfoItemCategory>
                <InfoItemValue>{released?.replace(/\D/gi, "/")}</InfoItemValue>
              </GameInfoItem>
              <GameInfoItem>
                <InfoItemCategory>genres</InfoItemCategory>
                <InfoItemValue>
                  {genres.map(({ name }) => name)?.join(", ")}
                </InfoItemValue>
              </GameInfoItem>
            </GameInfoList>
          </ControlsAndStats>
        </FirstContentBlock>

        <SecondContentBlock>
          <AboutGame>
            <AboutGameTitle>about</AboutGameTitle>

            <AboutGameParagraph>{description_raw}</AboutGameParagraph>
          </AboutGame>

          <GameLinkContainer>
            Visit the{" "}
            <a href={website} target='_blank' rel='noreferrer'>
              Official Website
            </a>
          </GameLinkContainer>
        </SecondContentBlock>
      </Content>
    </ShopPageContainer>
  );
}

export default ShopPage;
