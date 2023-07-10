import styled from "styled-components"

export  const FooterRegisterCSS = styled.footer`
background-color: var(--footer);
height: 108px;


.footer__section{
 
    max-width: 1728px;
    height: 100%;
    width: 85%;
    margin: 0 auto;
}

.footer__div{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.footer__text{
    color: black;
}

@media (max-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .footer__div{
        align-items: center;
        justify-content: center;
    }
    .footer__text{
        display: flex;
        align-items: center;
        text-align: center;
    }
}
`