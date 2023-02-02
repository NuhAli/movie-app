import { motion } from "framer";
import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  max-width: 719px;
  height: auto;
  min-height: 56px;
  background: #161d2f;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  z-index: 99999;

  @media screen and (min-width: 719px) {
    border-radius: 10px;
    top: 23px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  @media screen and (min-width: 1440px) {
    height: 888px;
    width: auto;
    min-width: 96px;
    padding: 0;
    top: 32px;
    bottom: 32px;
    left: 32px;
    transform: unset;
  }
`;

export const NavWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  @media screen and (min-width: 1440px) {
    height: 100%;
    width: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 36px 0;
  }
`;

export const NavIcon = styled.div`
    margin: 0 auto
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      fill-color: red;
    }
`;

export const NavLinks = styled.div`
  height: 100%;
  width: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #161d2f;
  z-index: 5;

  @media screen and (min-width: 1440px) {
    height: auto;
    min-width: 100%;
    margin-top: 75px;
    flex-direction: column;
    align-items: center;
    margin-bottom: auto;
  }
`;

export const NavLink = styled(Link)`
  margin-right: 24px;
  cursor: pointer;

  svg {
    height: 16px;
    width: 16px;
    fill: #5a698f;
    place-items: center center;
    &:hover {
      fill: white;
    }
  }

  &:hover {
    stroke: yellow;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    margin-right: 0;
    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;

export const SearchArea = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  min-width: 100%;
  height: 100%;
  min-height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    border-radius: 10px;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 100%;
  padding-left: 24px;
`;

export const SearchAreaLarge = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0px;
  height: 888px;
  width: 600px;
  background: rgb(22, 29, 47, 0.5);
  backdrop-filter: blur(10px);
  webkit-backdrop-filter: blur(10px);
  padding: 1rem 0.5rem;
  border-radius: 10px;
  opacity: 0;
`;

export const SearchInput = styled.input`
  min-width: 90%;
  height: 56px;
  background: transparent;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: rgba(255, 255, 255, 1);
  mix-blend-mode: normal;
  margin-left: 24px;
  caret-color: #fc4747;
  &::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.5);
    mix-blend-mode: normal;

    @media screen and (min-width: 768px) {
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 30px;
    }
  }

  &:focus {
    border-bottom: 1px solid #5a698f;
  }
`;
