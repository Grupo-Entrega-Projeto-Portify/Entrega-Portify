import { HeaderPortfolioPage } from "../../components/PortfolioPageComponents/header/header"
import { MainPortifolioPage } from "../../components/PortfolioPageComponents/main/main"
import { FooterRegister } from "../../components/RegisterPageComponents/footer"
import React from "react"



export const PortfolioPage = () => {

    return (
        <>
        <HeaderPortfolioPage />
        <MainPortifolioPage />
        <FooterRegister />
        </>
    )
}