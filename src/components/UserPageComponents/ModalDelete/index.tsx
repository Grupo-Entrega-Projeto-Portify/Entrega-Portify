import { useContext } from "react";
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext";
import { Modal } from "../../Modal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { StyledModalDelete } from "./index.ts";
import { ProjectContext } from "../../../providers/ProjectContext/ProjectContext.tsx";

export const ModalDelete = () => {
	const { modalDelete, setModalDelete } = useContext(PortfolioContext);

	const { deleteProject } = useContext(ProjectContext);

	const handleDelete = async () => {
		try {
			await deleteProject(projectId);
			setModalDelete(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<RiDeleteBin6Line onClick={() => setModalDelete(true)} />
			{modalDelete ? (
				<Modal>
					<StyledModalDelete>
						<div className="headerDiv">
							<h1>Deletar projeto</h1>
							<button
								className="buttonClose"
								onClick={() => setModalDelete(false)}
							>
								X
							</button>
						</div>
						<span>Deseja deletar o (nome do projeto)?</span>
						<div className="styleButtons">
							<button
								className="buttonCancel"
								onClick={() => setModalDelete(false)}
							>
								cancelar
							</button>
							<button className="buttonDelete" 
                            onClick={handleDelete}
                            >
                                deletar
                            </button>
						</div>
					</StyledModalDelete>
				</Modal>
			) : null}
		</div>
	);
};
