import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-icon.svg";
import Button from "../button/button";

export const GameCarrosselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: ${({ width }) => (width ? width : "100%")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "800px")};
`;

export const FrameContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${({ heightRatio }) => (heightRatio ? heightRatio : "66%")};
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 12px 3px
    ${({ theme }) => theme?.colors && theme.colors.neutral3};
`;

export const Frame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  overflow: hidden;
  scroll-snap-type: x mandatory;
`;

export const Slide = styled.div`
  flex: 1 0 100%;
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image && image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  scroll-snap-align: center;
`;

const Arrow = styled(ArrowIcon)`
  width: 80px;
  height: 40px;
  color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  background-color: ${({ theme }) => theme?.colors && theme.colors.secondary2};
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 400ms ease;

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
