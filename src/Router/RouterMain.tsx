import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../Pages/Cadastro"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
import { RegisterForm } from "../components/RegisterForm"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/Cadastro" element={<RegisterForm />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/loginpage" element={<LoginPage />} />
        </Routes >
    )
}
