import { HeaderCadastroCSS } from "./header"
import logo from "../../../assets/Logo.png"

export const HeaderRegister = () => {
  return (
    <>
      <HeaderCadastroCSS>
        <nav className="header__nav">
          <div className="header__div">
            <img src={logo} alt="logo da Portify" />
            <div className="header__divButton">
              <p className="header__register">Cadastre-se</p>
              <button className="header__button">acesse seu portfólio</button>
            </div>
          </div>
        </nav>
      </HeaderCadastroCSS>
    </>
  )
}