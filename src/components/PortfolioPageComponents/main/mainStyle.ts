import styled from "styled-components";

export const MainPortifolioCSS = styled.main`
  width: 100vw;
  min-height: 100vh;

  .main__section {
    max-width: 1728px;
    width: 85%;

    margin: 100px auto;
  }

  .main__div {
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
  }

  .main__job {
    color: var(--color-primary);
    font-weight: var(--700);
  }

  .div__lorem {
    width: 50%;
  }

  .div__p {
    color: var(--grey-1);
    font-weight: var(--400);
  }

  .projetcs__section {
    margin-top: 150px;
  }

  .projects__title {
    font-size: var(--title);
    font-weight: var(--700);

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
    font-size: 28px;
    font-weight: var(--700);
}

.projects__lorem{
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
