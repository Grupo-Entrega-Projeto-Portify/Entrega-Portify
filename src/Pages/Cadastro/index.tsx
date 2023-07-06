import { HeaderRegister } from "../../components/RegisterPageComponents/Header"
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