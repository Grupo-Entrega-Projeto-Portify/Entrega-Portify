import { HeaderPortfolioPageCSS } from "./headerStyle"
import logo from "../../../assets/HomePage/portifyLogoAzul.svg"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { useContext } from "react"

export const HeaderPortfolioPage = () => {

  const { portfolioData } = useContext(PortfolioContext)
  const portifolioColor = portfolioData?.color

  return (
    <>
      <HeaderPortfolioPageCSS portifolioColor={portifolioColor}>
        <img src={logo} alt="Logo do portify" />
      </HeaderPortfolioPageCSS>
    </>
  )
}
