import { useContext } from "react"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { Modal } from "../../Modal"
import { RiDeleteBin6Line } from "react-icons/ri"

export const ModalDelete = () => {
    const { modalDelete, setModalDelete } = useContext(PortfolioContext)

    return (
        <div>
            <RiDeleteBin6Line onClick={() => setModalDelete(true)}/>
            {modalDelete ? <Modal>
                <h1>Cancelar projeto</h1>
                <button onClick={() => setModalDelete(false)}>X</button>
                <div>
                    <span>Deseja deletar o (nome do projeto)?</span>
                    <button onClick={() => setModalDelete(false)}>cancelar</button>
                    <button>deletar</button>
                </div>
            </Modal> :null}
        </div>
    )
}