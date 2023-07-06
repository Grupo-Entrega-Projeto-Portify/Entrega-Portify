import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../Pages/Cadastro"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
import { UserPage } from "../Pages/UserPage"
import { PortfolioPage } from "../Pages/portifolioPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/registerpage" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/userPage" element={<UserPage />} />
            <Route path="/portfolios/:userID" element={<PortfolioPage />} />
        </Routes >
    )
}
