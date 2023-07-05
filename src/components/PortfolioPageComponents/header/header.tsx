import { HeaderPortfolioPageCSS } from "./headerStyle"
import logo from "../../../assets/HomePage/portifyLogoAzul.svg"

export const HeaderPortfolioPage = () => {
  return (
    <>
      <HeaderPortfolioPageCSS>
        <img src={logo} alt="Logo do portify" />
      </HeaderPortfolioPageCSS>
    </>
  )
}
