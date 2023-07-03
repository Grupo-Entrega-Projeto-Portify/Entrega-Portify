import styled from "styled-components"

export const HeaderStyled = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
background-color: var(--header);
padding: 1rem;
`

export const LogoImg = styled.img`
Width: 87px;
Height: 25px;
`

export const ButtonRegister = styled.button`
background-color: transparent;
border: none;
color: var(--background);
cursor: pointer;
font-size: var(--600);
font-weight: var(--600);
`

export const DivHeader = styled.div`
display: flex;
gap: 1rem;
`

export const ButtonLogin = styled.button`
background-color: var(--color-primary);
border-radius: 255px;
cursor: pointer;
color: var(--background);
font-size: var(--600);
font-weight: var(--600);
padding: 0.5rem;
`