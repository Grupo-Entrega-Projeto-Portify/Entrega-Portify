import React from "react"
import { HeaderHomePage } from "../../components/HomePageComponents/Header"
import { SectionHomePage } from "../../components/HomePageComponents/Section"
import { FooterHomePage } from "../../components/HomePageComponents/Footer"


export const HomePage = () => {
    return (
        <>
            <HeaderHomePage />
            <SectionHomePage />
            <FooterHomePage />
        </>
    )
}