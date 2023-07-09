import { useContext, useEffect } from "react"
import { StyledUl } from "./styled"
import { BiPencil } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"
import { ProjectContext } from "../../../../../../providers/ProjectContext/ProjectContext"
import { ModalDelete } from "../../../../ModalDelete/index.tsx"
import { ModalEdit } from "../../../../ModalEdit/index.tsx"

export const UlProjects = ({ portfolioId }) => {
  const { projects, fetchProjects } = useContext(ProjectContext)
  useEffect(() => {
    fetchProjects(portfolioId)
  }, [])


  return (
    <>
      <StyledUl>
        <div className="ul__div">
          <ul className="ul">
            {projects.map((project) => (
              <li className="ul__li" key={project.id}>
                <div className="ul__name">
                  <img src={project.coverUrl} alt="imagem do projeto" className="ul__img" />
                  <div className="ul__div-1">
                    <p className="ul__myproject">{project.name}</p>
                    <p className="ul__lorem">{project.description}</p>
                  </div>
                </div>

                <div className="ul__icons">
                  <ModalEdit projectId={project.id} />
                  <ModalDelete projectId={project.id} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </StyledUl>
    </>
  )
}
