import styled from "styled-components";

export const Card = styled.div`
  width: 164px;
  height: 154px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 192px;
    margin-right: 29px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 226px;
    margin-right: 40px;
    margin-bottom: 32px;
  }
`;

export const ImageContainer = styled.div`
  width: 164px;
  height: 110px;
  border-radius: 8px;
  position: relative;
  display: block;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 140px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 174px;
  }
`;

export const BookmarkIconContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
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

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const CardTextArea = styled.div`
  width: 100%;
  height: 44px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 8px;
`;

export const CardTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const CardBody = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 14px;
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
    font-size: 13px;
    line-height: 16px;
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
