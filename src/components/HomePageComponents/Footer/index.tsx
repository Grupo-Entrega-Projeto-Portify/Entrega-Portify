import { FooterHomePageCSS } from "./styled"
import Logo from "../../../assets/HomePage/portify.svg"

export const FooterHomePage = () => {

    return (
        <FooterHomePageCSS>
            <section className="footer__section">
                <div className="footer__div">
                    <img src={Logo} alt="logo da Portify" />
                    <p className="footer__text">Todos os direitos reservados  - Kenzie Academy Brasil</p>
                </div>
            </section>
        </FooterHomePageCSS>
    )
}