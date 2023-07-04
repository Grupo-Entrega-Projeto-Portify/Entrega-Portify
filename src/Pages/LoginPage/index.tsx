import { LoginForm } from "../../components/LoginForm"
import { HeaderRegister } from "../../components/RegisterPageComponents/Header"
import { FooterRegister } from "../../components/RegisterPageComponents/footer"


export const LoginPage = () => {
    return (
        <div className="loginPage">
            <HeaderRegister />
            <LoginForm />
            <FooterRegister />
        </div>
    )
}