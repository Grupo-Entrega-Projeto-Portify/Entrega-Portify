import { useState, useContext } from "react";
import { Modal } from "../../Modal";
import { ProjectContext } from "../../../providers/ProjectContext/ProjectContext";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { StyledDiv, StyledModalCreate } from "./index";

export const ModalCreate = ({ portfolioId }: { portfolioId: number }) => {
  const { createProject } = useContext(ProjectContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    repository: "",
    link: "",
    coverUrl: "",
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createProject({
      portfolioId,
      name: formData.name,
      repository: formData.repository,
      link: formData.link,
      description: formData.description,
      coverUrl: formData.coverUrl,
    });

    setModalOpen(false);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <StyledDiv>
      <button className="styleAddButton" onClick={() => setModalOpen(true)}>
        <AiOutlinePlusCircle className="iconPlus" /> Adicionar projeto
      </button>
      {modalOpen && (
        <Modal>
          <StyledModalCreate>
            <div className="headerDiv">
              <h1>Criar projeto</h1>
              <button
                className="buttonClose"
                onClick={() => setModalOpen(false)}
              >
                X
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <input
                className="inputModal"
                type="text"
                placeholder="Nome"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className="inputModal"
                type="text"
                placeholder="Descrição resumida"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
              <input
                className="inputModal"
                type="text"
                placeholder="Repositório"
                name="repository"
                value={formData.repository}
                onChange={handleInputChange}
              />
              <input
                className="inputModal"
                type="text"
                placeholder="Link do deploy (opcional)"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
              />
              <input
                className="inputModal"
                type="text"
                placeholder="URL da imagem (opcional)"
                name="coverUrl"
                value={formData.coverUrl}
                onChange={handleInputChange}
              />
              <div className="divCreateProject">
                <button type="submit" className="buttonCreateProject">
                  Criar projeto
                </button>
              </div>
            </form>
          </StyledModalCreate>
        </Modal>
      )}
    </StyledDiv>
  );
};
