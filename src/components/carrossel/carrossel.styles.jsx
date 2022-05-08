import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-icon.svg";
import Button from "../button/button";

export const CarrosselContainer = styled.section`
  position: relative;
  width: ${({ width }) => (width ? width : "100%")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: auto;
  background-color: #000000;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Koulen", cursive;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #aaa;
`;

const Arrow = styled(ArrowIcon)`
  width: 80px;
  height: 40px;
  color: #ff5733;
  background-color: hsl(0, 0%, 67%, 0.3);
  opacity: 0.3;
  cursor: pointer;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 1;
  }
`;

const SliderButton = (props) => (
  <Button type='button' {...props}>
    <Arrow />
  </Button>
);

export const NextSlide = styled(SliderButton)`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%) rotate(-90deg);
  z-index: 999;
`;

export const PreviousSlide = styled(NextSlide)`
  right: auto;
  left: -20px;
  transform: translateY(-50%) rotate(90deg);
`;

export const Frame = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
  scroll-snap-type: x mandatory;
`;
