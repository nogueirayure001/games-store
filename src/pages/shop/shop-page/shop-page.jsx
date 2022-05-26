import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchGame } from "../../../custom-hooks/use-fetch-game";
import { useFetchGameScreenshots } from "../../../custom-hooks/use-fetch-game-screenshots";
import { CartContext } from "../../../contexts/cart-context";
import Button from "../../../components/button/button";
import GameCarrossel from "../../../components/game-carrossel/game-carrossel";
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
  const game = useFetchGame(id);
  const screenshots = useFetchGameScreenshots(id);

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
