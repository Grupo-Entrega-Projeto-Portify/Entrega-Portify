import styled from "styled-components";

export const HeaderUserPageCSS = styled.header`
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



.header__button {
  
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