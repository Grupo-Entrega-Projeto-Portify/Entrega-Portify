import styled from "styled-components";

export const PublicPortifolioSection = styled.section`


  width: 100vw;

  .public__section {
    margin: 70px auto;
    max-width: 700px;
    width: 95%;
  }

  .public__div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .public__h2 {
    font-size: var(--title-2);
    font-weight: var(--400);
    color: rgba(0, 0, 0, 0.5);
  }

  .public__button {
    border: none;
    outline: none;

    border-radius: 255px;
    background-color: var(--color-primary);
    color: #ffffff;
    font-size: 16px;
    font-weight: var(--700);

    height: 55px;
    width: 210px;

    transition: 0.5s;
  }

  .public__button:hover{
    background-color: var(--color-primary-70);
  }
`;
