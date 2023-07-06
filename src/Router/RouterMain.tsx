import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../Pages/Cadastro"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
import { UserPage } from "../Pages/UserPage"
import { PortfolioPage } from "../Pages/portifolioPage"
import { ProtectedRoutes } from "../components/ProtectedRoutes/ProtectedRoutes"
import { PublicRoutes } from "../components/PublicRoutes/index.tsx"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/registerpage" element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/partifoliopage" element={<PortfolioPage />} />
            </Route>
            <Route path="/portfolios/:userID" element={<PortfolioPage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/userPage" element={<UserPage />} />
            </Route>
        </Routes >
    )
}
