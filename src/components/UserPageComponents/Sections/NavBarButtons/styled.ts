import styled from "styled-components";

export const StyleNavBar = styled.section`
  width: 100vw;

  .navbar__section {
    max-width: 1728px;
    height: 100%;
    width: 85%;
    margin: 0 auto;
  }

  .navbar__div {
    display: flex;
    gap: 10px;
  }

  .navbar__button {
    display: flex;
    gap: 5px;
    border: none;
    background-color: transparent;

    font-size: var(--title-1);
    font-weight: var(--700);

    transition: 0.3s;
  }

  .navbar__button:hover {
    color: var(--color-primary);
  }

  .icon {
    color: var(--color-primary);
  }
`;
