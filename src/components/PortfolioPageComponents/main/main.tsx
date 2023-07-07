import { MainPortifolioCSS } from "./mainStyle";
import logo from "../../../assets/HomePage/iconLiPortify.svg";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlinePaperClip } from "react-icons/ai";

export const MainPortifolioPage = ({ userPortfolio }) => {
  return (
    <>
      <MainPortifolioCSS>
        <section className="main__section">
          <div className="main__div">
            <div className="div__text">
              <div className="div__profile">
                <p className="main__name">Batman da Silva</p>
                <p className="main__job">{userPortfolio?.position}</p>
              </div>
              <div className="div__lorem">
                <p className="div__p">{userPortfolio?.description}</p>
              </div>
            </div>

            <section className="projetcs__section">
              <h1 className="projects__title">Meus projetos</h1>

              <ul className="projects__ul">
                {userPortfolio?.projects.map((project) => (
                  <li className="projects__li" key={project.id}>
                    <div className="projects__name">
                      <img
                        src={project.coverUrl}
                        alt="imagem do projeto"
                        className="projects__img"
                      />
                      <div className="projects__div-1">
                        <p className="projects__myproject">{project.name}</p>
                        <p className="projects__lorem">{project.description}</p>
                      </div>
                    </div>

                    <div className="projects__icons">
                      <a href={project.repository}>
                        <AiFillGithub size={30} />
                      </a>
                      <a href={project.link}>
                        <AiOutlinePaperClip size={30} />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </MainPortifolioCSS>
    </>
  );
};
