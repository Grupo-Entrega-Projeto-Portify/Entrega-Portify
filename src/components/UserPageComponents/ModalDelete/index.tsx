import { useContext } from "react"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { Modal } from "../../Modal"
import { RiDeleteBin6Line } from "react-icons/ri"
import { StyledDiv, StyledModalDelete } from "./index.ts"
import { ProjectContext } from "../../../providers/ProjectContext/ProjectContext.tsx"

interface IProps {
	projectId: number
}

export const ModalDelete = ({ projectId }:IProps) => {
	const { modalDelete, setModalDelete } = useContext(PortfolioContext)
	const { deleteProject } = useContext(ProjectContext)

	const handleDelete = async () => {
		try {
			await deleteProject(projectId)
			setModalDelete(false)
		} catch (error) {
		}
	}

	return (
		<StyledDiv>
			<RiDeleteBin6Line
				className="trash"
				onClick={() => setModalDelete(true)}
			/>
			{modalDelete ? (
				<Modal>
					<StyledModalDelete>
						<div className="headerDiv">
							<h1 className="titleModal">Deletar projeto</h1>
							<button
								className="buttonClose"
								onClick={() => setModalDelete(false)}
							>
								X
							</button>
						</div>
						<span>Deseja deletar o seu projeto?</span>
						<div className="styleButtons">
							<button
								className="buttonCancel"
								onClick={() => setModalDelete(false)}
							>
								cancelar
							</button>
							<button
								type="button"
								className="buttonDelete"
								onClick={handleDelete}
							>
								deletar
							</button>
						</div>
					</StyledModalDelete>
				</Modal>
			) : null}
		</StyledDiv>
	)
}
