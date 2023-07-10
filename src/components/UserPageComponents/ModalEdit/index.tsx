import { useContext } from "react"
import { Modal } from "../../Modal"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { Input } from "../../Input"
import { MdOutlineModeEditOutline } from "react-icons/md"
import { StyledDiv, StyledModalCreate } from "./index.ts"
import { ProjectContext } from "../../../providers/ProjectContext/ProjectContext.tsx"
import { SubmitHandler, useForm } from "react-hook-form"
import { IUpdateProjectInput } from "../../../providers/ProjectContext/types.ts"

interface IProps {
	projectId: number
}

export const ModalEdit = ({ projectId }:IProps) => {
	const { updateProject } = useContext(ProjectContext)
	const { modalEdit, setModalEdit } = useContext(PortfolioContext)
    const { register, handleSubmit } = useForm<IUpdateProjectInput>()

	const submit:SubmitHandler<IUpdateProjectInput> = (formData) => {
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
							<h1 className="titleModal">Editar projeto</h1>
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
								placeholder="Nome"
                                register={register("name")}
							/>
							<Input
								className="inputModal"
								type="text"
								placeholder="Descrição"
                                register={register("description")}
							/>
							<Input
								className="inputModal"
								type="text"
								placeholder="link se tiver ou não"
                                register={register("repository")}
							/>
							<Input
								className="inputModal"
								type="text"
								placeholder="Link do deploy (opcional)"
                                register={register("link")}
							/>
							<Input
								className="inputModal"
								type="text"
								placeholder="URL da imagem (opcional)"
                                register={register("coverUrl")}
							/>

							<div className="divCreateProject">
								<button
									type="submit"
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
