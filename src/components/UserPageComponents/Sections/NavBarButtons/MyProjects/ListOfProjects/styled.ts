import styled from "styled-components";


export const StyledUl = styled.section`
margin-top: 40px;

width: 100vw;
.ul__div{
    max-width: 1728px;
    height: 100%;
    width: 85%;
    margin: 0px auto;
}



.ul__text {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }

  .ul__profile {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
  }

  .ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;


    max-height: 520px;
    height: 520px;
    overflow-y: auto;
  }

  .ul__li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 95%;
    height: max-content;

  }

  .ul__name {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .ul__img {
    height: 150px;
    width: 242px;
  }

.ul__div-1{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.ul__myproject{
    font-size: 28px;
    font-weight: var(--700);
}

.ul__lorem{
font-size: var(--title-1);
font-weight: var(--400);

}

  .ul__icons {
    display: flex;
    gap: 10px;
    color: var(--color-primary);
    cursor: pointer;
  }

  @media (max-width: 769px) {
    display: flex;
    justify-content: center;

    .ul__text {
      justify-content: center;
      align-items: center;
      flex-direction: column;

      gap: 20px;
    }
  }

`