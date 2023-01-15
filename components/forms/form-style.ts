import Link from "next/link";
import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  @media screen and (min-width: 768px) {
    height: 100vh;
    justify-content: flex-start;
    padding-top: 80px;
  }
`;

export const FormIcon = styled.div`
  margin-bottom: 72px;
`;

export const FormArea = styled.form`
  width: 100%;
  max-width: 327px;
  min-height: 365px;
  max-height: auto;
  border-radius: 10px;
  background: #161d2f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;

  @media screen and (min-width: 768px) {
    max-width: 400px;
    padding: 32px;
  }
`;

export const FormTitle = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #5a698f;
  width: 100%;
  height: 37px;
  background-color: transparent;
  padding-left: 16px;
  padding-bottom: 10px;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  color: white;
  caret-color: #fc4747;

  &::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background: #fc4747;
  border-radius: 6px;
  outline: none;
  border: none;
  overflow: hidden;
  margin-top: 26px 0 24px 0;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

export const ProviderButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #5A698F;
  transition: all 0.2s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 1rem;
  }
 
  &:hover {
    background-color: #5A698F;
    border: 1px solid transparent;
  }
`

export const FormText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
  margin: 24px auto 0 auto;
`;

export const Highlight = styled(Link)`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  color: #fc4747;
  margin-left: 9px;
`;
