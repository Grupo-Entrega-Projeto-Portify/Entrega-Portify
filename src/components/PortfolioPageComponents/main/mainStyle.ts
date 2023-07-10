import styled from "styled-components"

interface IMainPortifolioCSS {
  portifolioColor: string | undefined;
}

export const MainPortifolioCSS = styled.main<IMainPortifolioCSS>`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.portifolioColor === "Escuro" ? "#0F1411" : "#ffffff"};

  .main__section {
    max-width: 1728px;
    width: 85%;

    margin:  auto;
  }

  .main__div {
    padding-top: 100px;
  }

  .div__text {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }

  .div__profile {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
  }

  .main__name {
    font-size: var(--title);
    font-weight: var(--700);
    color: ${(props) => props.portifolioColor === "Escuro" ? "#ffffff" : "#0F1411"};
  }

  .main__job {
    color: var(--color-primary);
    font-weight: var(--700);
  }

  .div__lorem {
    width: 50%;
  }

  .div__p {
    color: ${(props) => props.portifolioColor === "Escuro" ? "#ffffff" : "#0F1411"};
    font-weight: var(--400);
  }

  .projetcs__section {
    margin-top: 150px;
  }

  .projects__title {
    font-size: var(--title);
    font-weight: var(--700);
    color: ${(props) => props.portifolioColor === "Escuro" ? "#ffffff" : "#0F1411"};
    margin-bottom: 100px;
  }

  .projects__ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;


    max-height: 520px;
    height: 520px;
    overflow-y: auto;
  }

  .projects__li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 95%;
    height: max-content;

  }

  .projects__name {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .projects__img {
    height: 150px;
    width: 242px;
  }

.projects__div-1{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.projects__myproject{
  color: ${(props) => props.portifolioColor === "Escuro" ? "#ffffff" : "#0F1411"};
    font-size: 28px;
    font-weight: var(--700);
}

.projects__lorem{
  color: ${(props) => props.portifolioColor === "Escuro" ? "#ffffff" : "#0F1411"};
font-size: var(--title-1);
font-weight: var(--400);

}

  .projects__icons {
    display: flex;
    gap: 10px;
    color: var(--color-primary);
  }

  @media (max-width: 769px) {
    display: flex;
    justify-content: center;

    .div__text {
      justify-content: center;
      align-items: center;
      flex-direction: column;

      gap: 20px;
    }
  }
`;
