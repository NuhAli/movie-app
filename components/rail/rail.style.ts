import { motion } from "framer";
import styled from "styled-components";

export const RailItem = styled.div`
  min-width: 100%;
  max-width: auto;
  height: auto;
  padding: 1rem 0 1rem 24px;
  margin-bottom: 24px;
  overflow: hidden;
  display: flex;
  justify-contnt: center;
  flex-direction: column;
  position: relative;
`;

export const RailWrapper = styled(motion.div)`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction : row
  justify-content: flex-start;
  overflow-x: visible ;
`;

export const RailTitle = styled.h2`
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.3125px;
  margin-bottom: 24px;
`;
