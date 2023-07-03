import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../Pages/Cadastro"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/Cadastro" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/loginpage" element={<LoginPage />} />
        </Routes >
    )
}
