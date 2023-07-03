import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../Pages/Cadastro"
import { HomePage } from "../Pages/HomePage"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/Cadastro" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes >
    )
}
