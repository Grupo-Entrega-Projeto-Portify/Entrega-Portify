import React from "react"
import ImgWoman from "../../../assets/HomePage/ImgSection.png"
import { Test, TextInfo, ButtonLogin, ButtonRegister, DivButtons, LogoSection, DivInformations, ImgStyled, SectionStyled } from "./styled"

export const SectionHomePage = () => {
    return (
        <SectionStyled>
            <Test>
                <ImgStyled src={ImgWoman} />
                <DivInformations>
                    <LogoSection>Portify</LogoSection>
                    <TextInfo>Crie seu portfólio online</TextInfo>
                    <p>Crie um portifólio para você em minutos</p>
                    <DivButtons>
                        <ButtonRegister>cadastre-se</ButtonRegister>
                        <p>ou</p>
                        <ButtonLogin>acesse seu portfolio</ButtonLogin>
                    </DivButtons>
                </DivInformations>
            </Test>
        </SectionStyled>
    )
}