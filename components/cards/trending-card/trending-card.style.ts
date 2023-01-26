import styled from "styled-components";

export const TrendingWrapper = styled.div`
  min-width: 240px;
  height: 140px;
  margin-right: 1rem;
  border-radius: 8px;
  display: inline-block;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-width: 470px;
    height: 230px;
  }
`;

export const CardTextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardBookmarkContaienr = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 8px;

  @media screen and (min-width: 768px) {
    height: 115px;
  }
`;

export const BookmarkIcon = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #10141e;
  mix-blend-mode: normal;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CardText = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 3;
  padding: 1rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );

  @media screen and (min-width: 768px) {
    height: 115px;
    padding: 24px;
  }
`;

export const CardTitle = styled.h2`
font-family: "Outfit",
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  vertical-align: bottom;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    margin-bottom: 5px
  }
`;

export const CardBody = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;

  img {
    width: 12px;
    height: 12px;
    margin-right: 5px;
  }

  @media screen and (min-width: 768px) {
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
  }
`;

export const Dot = styled.div`
  position: relative;
  bottom: 7.5px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  vertical-align: middle;
  margin: 0 5px;

  @media screen and (min-width: 768px) {
    bottom: 4px;
  }
`;
