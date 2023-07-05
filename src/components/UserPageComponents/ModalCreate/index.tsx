import { useContext } from "react"
import { Modal } from "../../Modal"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { Input } from "../../Input"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TCreateModalValues, CreateModalSchema } from "./createModalSchema"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { ProjectContext } from "../../../providers/ProjectContext/ProjectContext"
// import React from "react"

export const ModalCreate = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm<TCreateModalValues>({
        resolver: zodResolver(CreateModalSchema)
    })

    const { modalCreate, setModalCreate } = useContext(PortfolioContext)
    const { createProject } = useContext(ProjectContext);

    const submit:SubmitHandler<TCreateModalValues> = (dataForm) => {
        console.log(dataForm)
        createProject({
            portfolioId: dataForm.portfolioId,
            name: dataForm.name,
            repository: dataForm.repository,
            link: dataForm.link,
          });
            reset();
    }
    return (
            <div>
                <button onClick={() => setModalCreate(true)}><AiOutlinePlusCircle /> Adicionar projeto</button>
                {modalCreate ? <Modal>
                    <h1>Criar projeto</h1>
                    <button onClick={() => setModalCreate(false)}>X</button>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input
                            className="main__input"
                            type="text"
                            placeholder="Nome"
                            register={register("name")}
                        />
                        {errors.name ? <p className="text__error">{errors.name.message}</p> : null}
                        <Input
                            className="main__input"
                            type="text"
                            placeholder="Descrição resumida"
                            register={register("description")}
                        />       
                        {errors.description ? <p className="text__error">{errors.description.message}</p> : null} 
                        <Input
                            className="main__input"
                            type="text"
                            placeholder="Repositório"
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

                        <button>Criar projeto</button>
                    </form>
                </Modal> :null}
            </div>
    )
}