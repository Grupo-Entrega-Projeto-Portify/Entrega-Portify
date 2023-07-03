import React from "react"
import Logo from "../../../assets/Logo.png"
import { ButtonLogin, DivHeader, ButtonRegister, LogoImg, HeaderStyled } from "./styled"

export const HeaderHomePage = () => {
    return (
        <HeaderStyled>
            <LogoImg src={Logo} />
            <DivHeader>
                <ButtonRegister>cadastre-se</ButtonRegister>
                <ButtonLogin>acesse seu portifolio</ButtonLogin>
            </DivHeader>
        </HeaderStyled>
    )
}