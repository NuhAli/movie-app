import styled from "styled-components";

export const GridContainer = styled.div`
  min-width: 100%;
  max-width: auto;
  height: auto;
  padding: 1rem 0 1rem 0px;
  margin-left: 16px;
  margin-bottom: 24px;
  overflow: hidden;
  display: flex;
  justify-contnt: center;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`;

export const GridTitle = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.3125px;
  color: #ffffff;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
`;

export const GridArea = styled.div`
  margin: 0 auto;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
