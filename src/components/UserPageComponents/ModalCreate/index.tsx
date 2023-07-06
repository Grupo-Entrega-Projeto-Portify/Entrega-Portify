import { useContext } from "react"
import { Modal } from "../../Modal"
import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext"
import { Input } from "../../Input"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TCreateModalValues, CreateModalSchema } from "./createModalSchema"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { ProjectContext } from "../../../providers/ProjectContext/ProjectContext"
import { StyledDiv, StyledModalCreate } from "./index"

export const ModalCreate = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<TCreateModalValues>({
		resolver: zodResolver(CreateModalSchema),
	});

	const { modalCreate, setModalCreate } = useContext(PortfolioContext);

	const { createProject } = useContext(ProjectContext);

	const submit: SubmitHandler<TCreateModalValues> = (dataForm) => {
		console.log(dataForm);
		createProject({
			portfolioId: dataForm.portfolioId,
			name: dataForm.name,
			repository: dataForm.repository,
			link: dataForm.link,
			description: dataForm.description,
			coverUrl: dataForm.coverUrl,
		});
		reset();
	};
    return (
            <StyledDiv>
                <button className="styleAddButton" onClick={() => setModalCreate(true)}><AiOutlinePlusCircle className="iconPlus"/> Adicionar projeto</button>
                {modalCreate ? <Modal>
                    <StyledModalCreate>
                        <div className="headerDiv">
                            <h1>Criar projeto</h1>
                            <button className="buttonClose" onClick={() => setModalCreate(false)}>X</button>
                        </div>
                        <form onSubmit={handleSubmit(submit)}>
                            <Input
                                className="inputModal"
                                type="text"
                                placeholder="Nome"
                                register={register("name")}
                            />
                            {errors.name ? <p className="text__error">{errors.name.message}</p> : null}
                            <Input
                                className="inputModal"
                                type="text"
                                placeholder="Descrição resumida"
                                register={register("description")}
                            />       
                            {errors.description ? <p className="text__error">{errors.description.message}</p> : null} 
                            <Input
                                className="inputModal"
                                type="text"
                                placeholder="Repositório"
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
                                <button type="submit" className="buttonCreateProject">Criar projeto</button>
                            </div>
                        </form>
                    </StyledModalCreate>
                </Modal> :null}
            </StyledDiv>
    )
}
