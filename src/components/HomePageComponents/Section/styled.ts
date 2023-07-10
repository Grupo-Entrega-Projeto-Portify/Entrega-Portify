import styled from "styled-components"
import { Link } from "react-router-dom"

export const SectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1224px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImgStyled = styled.img`
  width: 520px;
  height: 749.58px;

  @media (max-width: 1224px) {
    width: 100%;
    height: auto;
  }
`;

export const DivInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 550px;

  @media (max-width: 1224px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const LogoSection = styled.h2`
  font-size: var(--800);
  font-weight: var(--800);
  color: var(--color-primary);
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ButtonRegister = styled(Link)`
  background-color: var(--color-primary);
  color: var(--background);
  border: none;
  border-radius: 255px;
  padding: 1rem;
  font-size: var(--500);
  font-weight: var(--500);
  text-decoration: none;
  transition: 600ms;

  @media (max-width: 1224px) {
    font-size: var(--title-4);
    font-weight: var(--400);
    padding: 0.5rem;
  }

  &:hover {
    background-color: var(--color-primary-70);
  }
`;

export const ButtonLogin = styled(Link)`
  border: 1px solid var(--color-primary);
  background-color: transparent;
  color: var(--color-primary);
  border-radius: 255px;
  padding: 1rem;
  font-size: var(--400);
  font-weight: var(--400);
  text-decoration: none;
  transition: 0.5s;

  @media (max-width: 1224px) {
    font-size: var(--title-4);
    font-weight: var(--400);
    padding: 0.5rem;
  }

  :hover {
    background-color: var(--color-primary-70);
    color: #ffffff;
  }
`;

export const TextInfo = styled.h3`
  font-size: var(--title);
  font-weight: var(--800);
`;

export const Test = styled.div`
  max-width: 1728px;
  height: 100%;
  width: 85%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1224px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;