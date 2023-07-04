import { HeaderCadastroCSS } from "./styled"
import logo from "../../../assets/Logo.png"

export const HeaderHomePage = () => {
    return (
        <>
            <HeaderCadastroCSS>
                <nav className="header__nav">
                    <div className="header__div">
                        <img src={logo} alt="logo da Portify" />
                        <div className="header__divButton">
                            <button className="header__register">Cadastre-se</button>
                            <button className="header__button">acesse seu portfólio</button>
                        </div>
                    </div>
                </nav>
            </HeaderCadastroCSS>
        </>
    )
}