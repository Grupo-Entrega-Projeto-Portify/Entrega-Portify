import styled from "styled-components";

export const MainRegisterCSS = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 108px;

  .main__section {
    max-width: 1101px;
    width: 90%;
    height: 435px;

    margin: 250px auto;
  }

  .error__p {
    color: var(--Negative);
    font-size: 11px;
    font-weight: 600;
  }

  .main__back {
    text-decoration: none;
  }

  .main__backButton {
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--color-primary);
    margin-bottom: 10px;

    cursor: pointer;
  }

  .main__title {
    font-size: var(--title);
    font-weight: var(--700);

    margin-bottom: 10px;
    margin-top: 20px;
  }

  .main__text {
    font-size: var(--title-2);
    font-weight: var(--400);
    color: rgba(0, 0, 0, 0.5);

    font-family: "roboto", sans-serif;

    margin-bottom: 30px;
  }

  .main__div-input {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 21px;
  }

.main__fieldset{
    display: flex;
    gap: 7px;
    flex-direction: column;
    max-width: 540px;
    width: 100%;
}

  .main__input {

    max-width: 540px;
    width: 100%;

    border-radius: 8px;
    border: 1px solid var(--color-primary);

    height: 64px;

    padding-left: 7px;

    outline: none;
  }

.main__buttonRegister{
    width: 100%;

    display: flex;
    justify-content: end;
    
}

.main__register-button{
    border: none;

    background-color: var(--color-primary);
    color: var(--footer);

    border-radius: 255px;
    
    width: 154px;
    height: 55px;

    font-size: 16px;
    font-weight: var(--700);

    transition: 0.5s;
}

.main__register-button:hover{
    background-color: var(--color-primary-70);
}

  @media (max-width: 1220px) {
    .main__input {
      max-width: 100%;
    }

    .main__fieldset{
        max-width: 100%;
    }
  }

  @media (max-width: 500px) {
    .main__title {
      font-size: var(--title-mobile);
    }

    .main__section {
      margin: 70px auto;
    }
  }
`;
