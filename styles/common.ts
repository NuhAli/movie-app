import { motion } from "framer";
import styled from "styled-components";

export const CardArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  max-height: auto;
  padding-top: 160px;
  z-index: 2;
  @media screen and (min-width: 1440px) {
    padding-top: 15px;
    margin-left: 350px;
  }
`;

export const GridArea = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  @media screen and (min-width: 768px) {
    padding-top: 200px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 30px;
    margin-left: 165px;
  }
`;

export const LogoArea = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  
`;

export const PageTitle = styled(motion.div)`
  margin-top: 3rem;
  color: white;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 45px
  }
`;
