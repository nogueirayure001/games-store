import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-icon.svg";
import Button from "../button/button";

export const CarrosselFrameContainer = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : "100%")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: auto;
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

export const MultiFramesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FrameContainer = styled.div`
  width: 100%;
  max-width: 900px;
  box-shadow: 0 0 12px 3px;

  &:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 60%;
  }

  &:nth-child(2) {
    z-index: 10;
  }

  &:nth-child(3) {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 60%;
  }
`;

export const Frame = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  border-radius: 6px;
  overflow: hidden;
  scroll-snap-type: x mandatory;
`;
