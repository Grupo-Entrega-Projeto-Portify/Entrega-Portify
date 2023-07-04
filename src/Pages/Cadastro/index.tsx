import React from "react"
import { HeaderRegister } from "../../components/RegisterPageComponents/Header"
import { MainRegister } from "../../components/RegisterPageComponents/main"
import { FooterRegister } from "../../components/RegisterPageComponents/footer"
import { RegisterForm } from "../../components/RegisterForm"

export const RegisterPage = () => {
    return (
    <>
    <HeaderRegister />
    <RegisterForm />
    <FooterRegister />
    </>
    )
}