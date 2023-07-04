import styled from "styled-components";


export const MainRegisterCSS = styled.main`
width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;

.main__section{
max-width: 1101px;
width: 90%;
height: 435px;

margin: 250px auto;
}

.main__div{

}

.main__backButton{
    display: flex;
    gap: 7px;
    color: var(--color-primary);
    margin-bottom: 10px;

    cursor: pointer;
}

.main__title{
    font-size: var(--title);
    font-weight: var(--700);

    margin-bottom: 10px;
}

.main__text{
font-size: var(--title-2);
font-weight: var(--400);
color: rgba(0,0,0,0.5);

font-family: "roboto", sans-serif;

margin-bottom: 30px;
}

.main__div-input{
display: flex;
flex-wrap: wrap;
width: 100%;
gap: 7px;
}



.main__input{
max-width: 540px;
width: 100%;

border-radius: 8px;
border: 1px solid var(--color-primary);

height: 64px;

outline: none;
}

@media (max-width: 1220px) {
    .main__input{
        max-width: 100%;  
    }
}

@media (max-width: 500px) {
    .main__title{
        font-size: var(--title-mobile);
    }


    .main__section{


margin: 70px auto;
}
}
`