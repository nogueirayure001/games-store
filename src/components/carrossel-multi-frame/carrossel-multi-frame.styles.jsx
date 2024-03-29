import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-icon.svg";
import Button from "../button/button";

export const CarrosselMultiFrameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: visible;

  ${({ setBreadcrumbs }) => setBreadcrumbs && "gap: 16px;"};

  ${({ breadcrumbsConfigs }) =>
    breadcrumbsConfigs?.isOnHorizontal && "flex-direction: column;"}
`;

const Arrow = styled(ArrowIcon)`
  width: 80px;
  height: 40px;
  color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  background-color: ${({ theme }) => theme?.colors && theme.colors.secondary2};
  opacity: 0.4;
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

export const FramesAndButtons = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : "100%")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
`;

export const MultiFramesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FrameContainer = styled.div`
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 0 12px 3px
    ${({ theme }) => theme?.colors && theme.colors.neutral3};

  &:nth-child(1) {
    position: absolute;
    top: 50%;
    left: ${({ sideSlidesOffset }) => `-${sideSlidesOffset}` || "10%"};
    transform: translateY(-50%);
    width: ${({ sideSlidesPercentHeight }) => sideSlidesPercentHeight || "80%"};
  }

  &:nth-child(2) {
    z-index: 10;
  }

  &:nth-child(3) {
    position: absolute;
    top: 50%;
    right: ${({ sideSlidesOffset }) => `-${sideSlidesOffset}` || "10%"};
    transform: translateY(-50%);
    width: ${({ sideSlidesPercentHeight }) => sideSlidesPercentHeight || "80%"};
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
