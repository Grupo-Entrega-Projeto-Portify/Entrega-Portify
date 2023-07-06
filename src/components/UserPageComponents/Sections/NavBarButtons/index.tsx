import { GoHome } from "react-icons/go"
import { FiUser } from "react-icons/fi"
import { MdOutlineBackupTable } from "react-icons/md"
import { StyleNavBar } from "./styled"

export const SectionNavButtonsUserPage = ({ setCurrentSection }) => {
    const handleButtonClick = (section) => {
        setCurrentSection(section)
    }

    return (
        <StyleNavBar>

        <section className="navbar__section">
            <div className="navbar__div">

            <button className="navbar__button" onClick={() => handleButtonClick("start")}>
                <GoHome size={20} className="icon" />
                Início
            </button>
            <button className="navbar__button"  onClick={() => handleButtonClick("information")}>
                <FiUser size={20} className="icon" />
                Informações de perfil
            </button>
            <button  className="navbar__button"  onClick={() => handleButtonClick("projects")}>
                <MdOutlineBackupTable size={20} className="icon" />
                Meus projetos
            </button>
            </div>
        </section>
        </StyleNavBar>
    )
}
