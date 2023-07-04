import { HeaderCadastroCSS } from "./styled"
import { Link } from "react-router-dom"
import logo from "../../../assets/Logo.png"

export const HeaderHomePage = () => {
    return (
        <>
            <HeaderCadastroCSS>
                <nav className="header__nav">
                    <div className="header__div">
                        <img src={logo} alt="logo da Portify" />
                        <div className="header__divButton">
                            <Link to="/Cadastro" className="header__register">Cadastre-se</Link>
                            <Link to="/loginpage" className="header__button">acesse seu portfólio</Link>
                        </div>
                    </div>
                </nav>
            </HeaderCadastroCSS>
        </>
    )
}