import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../Pages/Cadastro"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
import { RegisterForm } from "../components/RegisterForm"
import { UserPage } from "../Pages/UserPage"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/registerpage" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/userPage" element={<UserPage />} />
        </Routes >
    )
}
