import { useContext } from "react"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { Modal } from "../../Modal"
import { RiDeleteBin6Line } from "react-icons/ri"
import { StyledModalDelete } from "./index.ts"

export const ModalDelete = () => {
    const { modalDelete, setModalDelete } = useContext(PortfolioContext)

    return (
        <div>
            <RiDeleteBin6Line onClick={() => setModalDelete(true)}/>
            {modalDelete ? <Modal>
                <StyledModalDelete >
                    <div className="headerDiv">
                        <h1>Deletar projeto</h1>
                        <button className="buttonClose" onClick={() => setModalDelete(false)}>X</button>
                    </div>
                        <span>Deseja deletar o (nome do projeto)?</span>
                    <div>
                        <button className="buttonCancel" onClick={() => setModalDelete(false)}>cancelar</button>
                        <button className="buttonDelete">deletar</button>
                    </div>
                </StyledModalDelete>
            </Modal> :null}
        </div>
    )
}