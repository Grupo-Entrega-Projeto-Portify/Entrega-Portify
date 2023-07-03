import React from "react"
import ImgWoman from "../../../assets/HomePage/ImgSection.png"
import { LogoSection, DivInformations, ImgStyled, SectionStyled } from "./styled"

export const SectionHomePage = () => {
    return (
        <SectionStyled>
            <ImgStyled src={ImgWoman} />
            <DivInformations>
                <LogoSection>Portify</LogoSection>
                <h3>Crie seu portfólio online</h3>
                <p>Crie um portifólio para você em minutos</p>
                <div>
                    <button>cadastre-se</button>
                    <p>ou</p>
                    <button>acesse seu portfolio</button>
                </div>
            </DivInformations>
        </SectionStyled>
    )
}