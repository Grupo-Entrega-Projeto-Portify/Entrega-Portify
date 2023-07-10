import styled from "styled-components"

interface IMainPortifolioCSS {
  portifolioColor?: string;
}

export const HeaderPortfolioPageCSS = styled.header<IMainPortifolioCSS>`
  height: 72px;
  background-color: ${(props) => props.portifolioColor === "Escuro" ? "#0F1411" : "#ffffff"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
