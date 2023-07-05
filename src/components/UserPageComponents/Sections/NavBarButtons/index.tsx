import { GoHome } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { MdOutlineBackupTable } from "react-icons/md";

export const SectionNavButtonsUserPage = ({ setCurrentSection }) => {
    const handleButtonClick = (section) => {
        setCurrentSection(section)
    }

    return (
        <section>
            <button onClick={() => handleButtonClick("start")}>
                <GoHome />
                Início
            </button>
            <button onClick={() => handleButtonClick("information")}>
                <FiUser />
                Informações de perfil
            </button>
            <button onClick={() => handleButtonClick("projects")}>
                <MdOutlineBackupTable />
                Meus projetos
            </button>
        </section>
    )
}
