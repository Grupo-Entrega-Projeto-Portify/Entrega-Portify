import React from "react"
import Logo from "../../../assets/Logo.png"
import { DivHeader, ButtonRegister, LogoImg, HeaderStyled } from "./styled"

export const HeaderCadastroPage = () => {
    return (
        <HeaderStyled>
            <LogoImg src={Logo} />
            <DivHeader>
                <ButtonRegister>cadastre-se</ButtonRegister>
                <button>acesse seu portifolio</button>
            </DivHeader>
        </HeaderStyled>
    )
}