import styled from "styled-components"

export const HeaderCadastroCSS = styled.header`
  width: 100vw;
  height: 72px;
  background-color: var(--header);

  .header__nav {
    max-width: 1728px;
    height: 100%;
    width: 85%;
    margin: 0 auto;
  }

  .header__div {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .header__divButton {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .header__register {
    font-weight: var(--700);
    color: #ffffff;
    font-size: var(--title-2);
    text-decoration: none;

    transition: 0.5s;
  }

.header__register:hover{
  color: var(--color-primary);
}

  .header__button {
    border-radius: 255px;
    border: none;

    color: #ffffff;
    background-color: var(--color-primary);

    width: 212px;
    height: 44px;

    font-size: var(--title-2);
    font-weight: var(--700);

    transition: 0.5s;

    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__button:hover {
    background-color: var(--color-primary-70);
  }

  @media (max-width: 500px) {
    height: 150px;

    .header__div {
      justify-content: center;
    }

    .header__divButton {
      justify-content: center;
    }
  }
`;
