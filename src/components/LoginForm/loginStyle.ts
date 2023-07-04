import styled from "styled-components";

export const MainLoginCSS = styled.main`
  width: 100vw;
  height: 100vh;

  margin-bottom: 108px;

  .main__section {
    max-width: 1728px;
    width: 70%;
    margin: 80px auto;
  }

  .div__conteiner {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .main__mgDiv {
  }

  .main__img {
    max-width: 520px;
    max-height: 749.58px;
    width: 100%;
    height: 100%;
  }

  .main_loginDiv {
    max-width: 518px;
    max-height: 552px;
    width: 100%;
    height: 100%;

    margin-left: 30px;
  }

  .main__loginTitle {
    font-size: var(--title);
    font-weight: var(--700);

    margin-bottom: 20px;
  }

  .main__text {
    font-size: var(--title-2);
    color: rgba(0, 0, 0, 0.5s);

    margin-bottom: 15px;
  }

  .main__input {
    border: 1px solid var(--color-primary);
    height: 64px;

    max-width: 518px;
    width: 100%;

    border-radius: 8px;
  }

  .main__form {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .main__fieldset {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .main__button {
    width: 131px;
    height: 55px;

    border-radius: 255px;
    border: none;

margin-top: 27px;

    font-size: var(--title-2);
    font-weight: var(--700);

    color: #ffffff;
    background-color: var(--color-primary);
  }

  .main__p{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: var(--title-2);
    color: rgba(0, 0, 0, 0.5s);
  }

  .main__goToRegister{

    display: flex;
    align-items: center;
    justify-content: center;
   
    width: 173px;
    height: 55px;

    text-decoration: none; 

    border-radius: 255px;

    font-weight: var(--700);
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }

  @media (max-width: 769px) {
    .div__conteiner{
        flex-direction: column;
    }

  }
`;
