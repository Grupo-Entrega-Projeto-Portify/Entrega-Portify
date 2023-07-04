
import { HeaderUserPageCSS } from "./styled"
import { Link } from "react-router-dom"
import logo from "../../../assets/Logo.png"

export const HeaderUserPage = () => {
    return (
        <>
            <HeaderUserPageCSS>
                <nav className="header__nav">
                    <div className="header__div">
                        <img src={logo} alt="logo da Portify" />
                        <div className="header__divButton">
                            <p>usuario</p>
                            <button className="header__button">Sair</button>
                        </div>
                    </div>
                </nav>
            </HeaderUserPageCSS>
        </>
    )
}