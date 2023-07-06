import { HeaderPortfolioPage } from "../../components/PortfolioPageComponents/header/header"
import { MainPortifolioPage } from "../../components/PortfolioPageComponents/main/main"
import { FooterRegister } from "../../components/RegisterPageComponents/footer"
import { useContext, useEffect } from "react"
import { PortfolioContext } from "../../providers/PortfolioContext/PortfolioContext"
import { useParams } from "react-router-dom"

export const PortfolioPage = () => {
    const portfolioContext = useContext(PortfolioContext);
    const { fetchPortfolios, portfolios } = portfolioContext;
    const { userID } = useParams()

    useEffect(() => {
        fetchPortfolios(userID);
    }, [fetchPortfolios, userID]);

    const userPortfolio = portfolios.find(
        (portfolio) => portfolio.userId === Number(userID)
    );

    return (
        <>
            <h1>{userPortfolio?.position}</h1>
            <HeaderPortfolioPage />
            <MainPortifolioPage />
            <FooterRegister />
        </>
    )
};
