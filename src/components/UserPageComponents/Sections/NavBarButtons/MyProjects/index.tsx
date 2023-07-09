import { useContext } from "react"
import { PortfolioContext } from "../../../../../providers/PortfolioContext/PortfolioContext.tsx"
import { ModalCreate } from "../../../ModalCreate/index.tsx"
import { MyprojectsSectionCSS } from "./styled.ts"
import { UlProjects } from "./ListOfProjects/index.tsx"

export const SectionMyProjectsUserPage = () => {
  const { portfolios } = useContext(PortfolioContext)

  const portfolioId = portfolios.length > 0 ? portfolios[0].id : null

  return (
    <>
      <MyprojectsSectionCSS>
        <section className="myprojects__section">
          <div className="myprojects__div">
            <h2 className="myprojects__h2">Meus projetos</h2>
            {portfolioId && <ModalCreate portfolioId={portfolioId} />}
          </div>
        </section>
      </MyprojectsSectionCSS >
      {portfolioId && <UlProjects portfolioId={portfolioId} />}
    </>
  )
}
