import { useState } from "react"
import { HeaderUserPage } from "../../components/UserPageComponents/Header"
import { SectionWelcomeUserPage } from "../../components/UserPageComponents/Sections/Welcome"
import { SectionNavButtonsUserPage } from "../../components/UserPageComponents/Sections/NavBarButtons"
import { SectionStartPerfilUserPage } from "../../components/UserPageComponents/Sections/NavBarButtons/StartPerfil"
import { SectionInformationUserPage } from "../../components/UserPageComponents/Sections/NavBarButtons/InformationPerfil"

export const UserPage = () => {

    const [currentSection, setCurrentSection] = useState("start")

    const renderSection = () => {
        switch (currentSection) {
            case "start":
                return <SectionStartPerfilUserPage />
            case "information":
                return <SectionInformationUserPage />
            default:
                return null;
        }
    }

    return (
        <>
            <HeaderUserPage />
            <SectionWelcomeUserPage />
            <SectionNavButtonsUserPage setCurrentSection={setCurrentSection} />
            {renderSection()}
        </>
    )
}