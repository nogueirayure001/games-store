import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchGame } from "../../custom-hooks/use-fetch-game";
import { CartContext } from "../../contexts/cart-context";
import Button from "../button/button";
import GameCarrossel from "../game-carrossel/game-carrossel";
import {
  GamePageContainer,
  Title,
  Content,
  MainPageContent,
  GamePrice,
  ButtonsContainer,
  GameInfoList,
  GameInfoItem,
  InfoItemCategory,
  InfoItemValue,
  AboutGame,
  AboutGameTitle,
  AboutGameParagraph,
} from "./game-page.styles";

function GamePage() {
  const { id } = useParams();

  const game = useFetchGame(id);

  const [price] = useState((Math.random() * 60 + 40).toFixed(2));

  const { addToCart } = useContext(CartContext);

  const addToCartHandler = () => addToCart({ ...game, price });

  if (!game) {
    return (
      <div>
        <h1>carregando...</h1>
      </div>
    );
  }

  const { name, metacritic, rating, released, genres } = game;

  return (
    <GamePageContainer>
      <Title>{name}</Title>

      <Content>
        <GameCarrossel
          game={game}
          configs={{
            width: "100%",
            maxWidth: "800px",
            heightRatio: "66%",
          }}
        />

        <MainPageContent>
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
              <InfoItemCategory>retacritic</InfoItemCategory>
              <InfoItemValue>{metacritic}</InfoItemValue>
            </GameInfoItem>
            <GameInfoItem>
              <InfoItemCategory>rating</InfoItemCategory>
              <InfoItemValue>{rating}</InfoItemValue>
            </GameInfoItem>
            <GameInfoItem>
              <InfoItemCategory>released</InfoItemCategory>
              <InfoItemValue>{released}</InfoItemValue>
            </GameInfoItem>
            <GameInfoItem>
              <InfoItemCategory>genres</InfoItemCategory>
              <InfoItemValue>
                {genres.map(({ name }) => `${name} `)}
              </InfoItemValue>
            </GameInfoItem>
          </GameInfoList>

          <AboutGame>
            <AboutGameTitle>about</AboutGameTitle>

            <AboutGameParagraph>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </AboutGameParagraph>
          </AboutGame>
        </MainPageContent>
      </Content>
    </GamePageContainer>
  );
}

export default GamePage;
