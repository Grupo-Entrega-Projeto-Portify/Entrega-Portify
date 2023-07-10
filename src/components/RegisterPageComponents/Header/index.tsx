import { HeaderCadastroCSS } from "./header"
import logo from "../../../assets/Logo.png"
import { Link } from "react-router-dom"

export const HeaderRegister = () => {
  return (
    <>
      <HeaderCadastroCSS>
        <nav className="header__nav">
          <div className="header__div">
            <Link to="/"><img src={logo} alt="logo da Portify" /></Link>
            <div className="header__divButton">
              <Link to={"/registerpage"} className="header__register">Cadastre-se</Link>
              <Link to={"/loginpage"} className="header__button">acesse seu portfólio</Link>
            </div>
          </div>
        </nav>
      </HeaderCadastroCSS>
    </>
  )
}