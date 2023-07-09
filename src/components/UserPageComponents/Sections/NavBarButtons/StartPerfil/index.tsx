import { ModalCreatePortfolio } from "../../../ModalCreatePortfolio/index.tsx"
import { PublicPortifolioSection } from "./styled.ts"

export const SectionStartPerfilUserPage = () => {
  return (
    <>
      <PublicPortifolioSection>
        <section className="public__section">
          <div className="public__div">
            <h2 className="public__h2">Seu Portfólio ainda não está publicado</h2>

            <ModalCreatePortfolio/>
          </div>
        </section>
      </PublicPortifolioSection>
    </>
  )
}
