import { useContext, useEffect, useState } from "react"
import { Modal } from "../../Modal"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { Input } from "../../Input"
import { MdOutlineModeEditOutline } from "react-icons/md"
import { StyledDiv, StyledModalCreate } from "./index.ts"
import { ProjectContext } from "../../../providers/ProjectContext/ProjectContext.tsx"
import { SubmitHandler, useForm } from "react-hook-form"
import { IUpdateProjectInput } from "../../../providers/ProjectContext/types.ts"

export const ModalEdit = ({ projectId }) => {
	const { updateProject, projects } = useContext(ProjectContext)
	const { modalEdit, setModalEdit } = useContext(PortfolioContext)
    const { register, handleSubmit } = useForm<IUpdateProjectInput>()

	const submit:SubmitHandler<IUpdateProjectInput> = (formData) => {
        console.log(formData)
        console.log('atualização enviada')
		updateProject(projectId, formData)
	}

	return (
		<StyledDiv>
			<MdOutlineModeEditOutline
				className="edit"
				onClick={() => setModalEdit(true)}
			/>
			{modalEdit ? (
				<Modal>
					<StyledModalCreate>
						<div className="headerDiv">
							<h1>Editar projeto</h1>
							<button
								className="buttonClose"
								onClick={() => setModalEdit(false)}
							>
								X
							</button>
						</div>
						<form onSubmit={handleSubmit(submit)} >
							<Input
								className="inputModal"
								type="text"
								placeholder="aparecer nome do projeto"
								// name="name"
								// value={formData.name}
								// onChange={handleInputChange}
                                register={register("name")}
							/>
							<Input
								className="inputModal"
								type="text"
								placeholder="conteúdo já existente"
								// name="description"
								// value={formData.description}
								// onChange={handleInputChange}
                                register={register("description")}
							/>
							<Input
								className="inputModal"
								type="text"
								placeholder="link se tiver ou não"
								// name="repository"
								// value={formData.repository}
								// onChange={handleInputChange}
                                register={register("repository")}
							/>
							<Input
								className="inputModal"
								type="text"
								placeholder="Link do deploy (opcional)"
								// name="link"
								// value={formData.link}
								// onChange={handleInputChange}
                                register={register("link")}
							/>
							<Input
								className="inputModal"
								type="text"
								placeholder="URL da imagem (opcional)"
								// name="coverUrl"
								// value={formData.coverUrl}
								// onChange={handleInputChange}
                                register={register("coverUrl")}
							/>

							<div className="divCreateProject">
								<button
									type="submit"
									// onClick={submit}
									className="buttonCreateProject"
								>
									Editar projeto
								</button>
							</div>
						</form>
					</StyledModalCreate>
				</Modal>
			) : null}
		</StyledDiv>
	)
}
