import { useContext } from "react"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { Modal } from "../../Modal"
import { Input } from "../../Input"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TCreateModalValues, CreateModalSchema } from "./createModalSchema"
// import React from "react"

export const ModalCreatePortfolio = () => {

    const { register, handleSubmit, reset, formState: { errors }} = useForm<TCreateModalValues>({
        resolver: zodResolver(CreateModalSchema)
    })

    const { modalCreatePortfolio, setModalCreatePortfolio } = useContext(PortfolioContext)

    const submit:SubmitHandler<TCreateModalValues> = (dataForm) => {
        console.log(dataForm)
        reset();
    }
    return (
        <div>
            <button onClick={() => setModalCreatePortfolio(true)}>Publicar portfólio</button>
            {modalCreatePortfolio ? <Modal>
                <h1>Publicar portfólio</h1> 
                <button onClick={() => setModalCreatePortfolio(false)}>X</button>
                <form onSubmit={handleSubmit(submit)}>
                    <select {...register("color")}>
                        <option value="Claro">Claro</option>
                        <option value="Escuro">Escuro</option>
                    </select>
                    <Input  
                    className="main__input"
                    type="text"
                    placeholder="Cargo"
                    register={register("position")}
                    />
                    {errors.position ? <p className="text__error">{errors.position.message}</p> : null}
                    <Input  
                    className="main__input"
                    type="text"
                    placeholder="Descrição"
                    register={register("description")}
                    />
                    <button onClick={() => setModalCreatePortfolio(false)}>cancelar</button>
                    <button>Publicar</button>
                </form>
            </Modal> :null}
        </div>
    )
}