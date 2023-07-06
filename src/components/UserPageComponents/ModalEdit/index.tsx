import { useContext } from "react"
import { Modal } from "../../Modal"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { Input } from "../../Input"
import { useForm } from "react-hook-form"
import { MdOutlineModeEditOutline } from "react-icons/md"
import { StyledDiv, StyledModalCreate } from "./index.ts"

export const ModalEdit = () => {
    const { handleSubmit, reset} = useForm()

    const { modalEdit, setModalEdit } = useContext(PortfolioContext)

    const submit = (dataForm) => {
        console.log(dataForm)
        reset()
    }
    return (
            <StyledDiv>
                <MdOutlineModeEditOutline className="edit" onClick={() => setModalEdit(true)}/>
                {modalEdit ? <Modal>
                    <StyledModalCreate>
                        <div className="headerDiv">
                            <h1>Editar projeto</h1>
                            <button className="buttonClose" onClick={() => setModalEdit(false)}>X</button>
                        </div>
                        <form onSubmit={handleSubmit(submit)}>
                            <Input
                                className="inputModal"
                                type="text"
                                placeholder="aparecer nome do projeto"
                            />
                            <Input
                                className="inputModal"
                                type="text"
                                placeholder="conteúdo já existente"
                            />       
                            <Input
                                className="inputModal"
                                type="text"
                                placeholder="link se tiver ou não"
                            />
                            <Input
                                className="inputModal"
                                type="text"
                                placeholder="Link do deploy (opcional)"
                            />
                            <Input
                                className="inputModal"
                                type="text"
                                placeholder="URL da imagem (opcional)"
                            />

                            <div className="divCreateProject">
                                <button className="buttonCreateProject">Editar projeto</button>
                            </div>
                        </form>
                    </StyledModalCreate>
                </Modal> :null}
            </StyledDiv>
    )
}