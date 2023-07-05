import { useContext } from "react"
import { Modal } from "../../Modal"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { Input } from "../../Input"
import { useForm } from "react-hook-form"
import { MdOutlineModeEditOutline } from "react-icons/md"
// import React from "react"

export const ModalEdit = () => {
    const { handleSubmit, reset} = useForm()

    const { modalEdit, setModalEdit } = useContext(PortfolioContext)

    const submit = (dataForm) => {
        console.log(dataForm)
        reset()
    }
    return (
            <div>
                <MdOutlineModeEditOutline onClick={() => setModalEdit(true)}/>
                {modalEdit ? <Modal>
                    <h1>Editar projeto</h1>
                    <button onClick={() => setModalEdit(false)}>X</button>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input
                            className="main__input"
                            type="text"
                            placeholder="aparecer nome do projeto"
                        />
                        <Input
                            className="main__input"
                            type="text"
                            placeholder="conteúdo já existente"
                        />       
                        <Input
                            className="main__input"
                            type="text"
                            placeholder="link se tiver ou não"
                        />
                        <Input
                            className="main__input"
                            type="text"
                            placeholder="Link do deploy (opcional)"
                        />
                        <Input
                            className="main__input"
                            type="text"
                            placeholder="URL da imagem (opcional)"
                        />

                        <button>Editar projeto</button>
                    </form>
                </Modal> :null}
            </div>
    )
}