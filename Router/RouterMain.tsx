import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../src/Pages/Cadastro"
import { HomePage } from "../src/Pages/HomePage"
import { LoginPage } from "../src/Pages/LoginPage"
import { UserPage } from "../src/Pages/UserPage"
import { PortfolioPage } from "../src/Pages/portifolioPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/registerpage" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/userPage" element={<UserPage />} />
            <Route path="/partifoliopage" element={<PortfolioPage />} />
        </Routes >
    )
}
