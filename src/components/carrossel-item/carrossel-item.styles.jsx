import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/star-icon.svg";
import { ReactComponent as CartPlusIcon } from "../../assets/cart-plus.svg";

export const CarrosselItemContainer = styled.div`
  flex: 1 0 100%;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: ${({ heightRatio }) => (heightRatio ? heightRatio : "66%")};
  ${({ backgroundImage }) =>
    backgroundImage && `background-image: url(${backgroundImage});`}
  background-size: cover;
  background-color: hsla(0, 0%, 0%, 0.9);
  scroll-snap-align: center;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ff5733;
  letter-spacing: 1.5px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ItemInfo = styled.div`
  position: absolute;
  bottom: 0;
  display: ${({ showInfo }) => (showInfo ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  padding: 1rem 2rem;
  text-align: center;
  background-color: hsla(0, 0%, 0%, 0.6);
  border-radius: 8px 8px 0 0;
  transition: height 400ms ease;

  &:hover {
    height: 11rem;

    ${Title} {
      white-space: normal;
      overflow: visible;
    }
  }

  @media screen and (min-width: 768px) {
    height: 4.2rem;
    padding: 1.5rem 4rem;

    &:hover {
      height: 12.32rem;
    }
  }
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin-top: 1rem;
  color: #aaa;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
`;

export const RatingIcon = styled(StarIcon)`
  width: 16px;
  margin-right: 0.5rem;
  color: #ff5733;
`;

export const Value = styled.p`
  font-weight: 500;
`;

export const AddToCartIcon = styled(CartPlusIcon)`
  width: 24px;
  color: #aaa;
  transition: color 400ms ease;

  &:hover {
    color: #ff5733;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
`;

export const Description = styled.p`
  max-width: 500px;
  margin: 0.5rem auto 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #aaa;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
