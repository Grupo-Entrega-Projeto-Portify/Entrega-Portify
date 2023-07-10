import { FooterRegisterCSS } from "./footer"
import logo from "../../../assets/HomePage/portify.svg"

export const FooterRegister = () => {


    return(
        <>
        <FooterRegisterCSS>
           <section className="footer__section">
            <div className="footer__div">
            <img src={logo} alt="logo da Portify" />
            <p className="footer__text">Todos os direitos reservados  - Kenzie Academy Brasil</p>
            </div>
           </section>
        </FooterRegisterCSS>
        </>
    )
}