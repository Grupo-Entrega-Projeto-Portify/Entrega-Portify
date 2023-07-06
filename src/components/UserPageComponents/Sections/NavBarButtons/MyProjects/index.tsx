import { useEffect, useState } from "react"
import { SectionNoProjectsUserPage } from "./NoProjects"
import { SectionAllProjectsUserPage } from "./Projects"
import { ModalCreate } from "../../../ModalCreate/index.tsx"
import { MyprojectsSectionCSS } from "./styled.ts"
import { UlProjects } from "./ListOfProjects/index.tsx"

export const SectionMyProjectsUserPage = () => {
  return (
    <>
      <MyprojectsSectionCSS>
        <section className="myprojects__section">
          <div className="myprojects__div">
            <h2 className="myprojects__h2">Meus projetos</h2>
            <ModalCreate />
          </div>
        </section>
      </MyprojectsSectionCSS>
      <UlProjects />
    </>
  )
}
