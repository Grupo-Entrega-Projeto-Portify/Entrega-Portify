import React from "react"
import { HeaderRegister } from "../../components/RegisterPageComponents/Header"
import { MainRegister } from "../../components/RegisterPageComponents/main"
import { FooterRegister } from "../../components/RegisterPageComponents/footer"

export const RegisterPage = () => {
    return (
    <>
    <HeaderRegister />
    <MainRegister />
    <FooterRegister />
    </>
    )
}