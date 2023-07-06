import styled from "styled-components";

export const FormInfoUser = styled.form`

  width: 100%;

  .info__section {
    max-width: 700px;
    width: 95%;
    margin: 70px auto;

  }

  .div__center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info__title {
    font-size: 44px;
    font-weight: var(--700);
  }

  .info__divProfile {
    margin-top: 30px;
    display: flex;
    gap: 20px;
  }

  .info__h3Name {
    font-size: var(--title-1);
    font-weight: var(--700);
  }

  .info__name {
    font-weight: var(--400);
    font-size: var(--title-2);
  }

  .info__h3email {
    font-size: var(--title-1);
    font-weight: var(--700);
  }

  .info__email {
    font-weight: var(--400);
    font-size: var(--title-2);
  }

  .info__fieldset {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 20px;
  }

  .info__label {
    font-size: var(--title-3);
    color: var(--color-primary);
  }

  .info__input {
    height: 64px;
    padding-left: 7px;
    border-radius: 8px;

    outline: none;
    border: 1px solid var(--color-primary);
  }

  .info__textarea {
    padding-left: 7px;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    height: 141px;

    outline: none;

    resize: none;
  }

  .info__buttonDiv {
    margin-top: 10px;
    display: flex;
    justify-content: end;
  }

  .info__button {
    width: 207px;
    height: 55px;
    border-radius: 255px;
    
    border: none;

    background-color: var(--color-primary);
    color: #ffffff;

    font-size: var(--title-2);
    font-weight: var(--700);
  }
`;
