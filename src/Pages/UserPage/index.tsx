import { useState, useContext, useEffect } from "react"
import { HeaderUserPage } from "../../components/UserPageComponents/Header"
import { SectionWelcomeUserPage } from "../../components/UserPageComponents/Sections/Welcome"
import { SectionNavButtonsUserPage } from "../../components/UserPageComponents/Sections/NavBarButtons"
import { SectionStartPerfilUserPage } from "../../components/UserPageComponents/Sections/NavBarButtons/StartPerfil"
import { SectionInformationUserPage } from "../../components/UserPageComponents/Sections/NavBarButtons/InformationPerfil"
import { SectionMyProjectsUserPage } from "../../components/UserPageComponents/Sections/NavBarButtons/MyProjects"
import { SectionStartPerfilLinkUserPage } from "../../components/UserPageComponents/Sections/NavBarButtons/StartPerfil/StartPerfilLink"
import { PortfolioContext } from "../../providers/PortfolioContext/PortfolioContext"

export const UserPage = () => {
    const [currentSection, setCurrentSection] = useState("start");
    const [hasPortfolio, setHasPortfolio] = useState(false);

    const { fetchPortfolios, portfolios, portfolioData,  } = useContext(PortfolioContext);

    useEffect(() => {
        const userString = localStorage.getItem("@USER");
        if (userString) {
            const user = JSON.parse(userString);
            const userId = user.id;
            fetchPortfolios(userId);
        }
    }, [fetchPortfolios]);

    useEffect(() => {
        if (portfolios.length > 0) {
            setHasPortfolio(true);
        } else {
            setHasPortfolio(false);
        }
    }, [portfolios]);

    const renderSection = () => {
        if (currentSection === "start") {
            if (hasPortfolio) {
                return <SectionStartPerfilLinkUserPage />;
            } else {
                return <SectionStartPerfilUserPage />;
            }
        } else if (currentSection === "information") {
            return <SectionInformationUserPage />;
        } else if (currentSection === "projects") {
            return <SectionMyProjectsUserPage />;
        } else {
            return null;
        }
    };

    console.log(portfolioData)

    return (
        <>
            <HeaderUserPage />
            <SectionWelcomeUserPage />
            <SectionNavButtonsUserPage setCurrentSection={setCurrentSection} />
            {renderSection()}
        </>
    );
};
