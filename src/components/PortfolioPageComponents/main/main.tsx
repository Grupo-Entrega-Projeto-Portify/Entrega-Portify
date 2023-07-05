import { MainPortifolioCSS } from "./mainStyle";
import logo from "../../../assets/HomePage/iconLiPortify.svg";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlinePaperClip } from "react-icons/ai";
import React from "react";


export const MainPortifolioPage = () => {
  return (
    <>
      <MainPortifolioCSS>
        <section className="main__section">
          <div className="main__div">
            <div className="div__text">
              <div className="div__profile">
                <p className="main__name">Batman da Silva</p>
                <p className="main__job">Desenvolvedor Full Stack</p>
              </div>
              <div className="div__lorem">
                <p className="div__p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer pulvinar urna ante, nec dapibus leo semper nec.
                  Vivamus aliquet nibh nec urna accumsan, eget euismod magna
                  fringilla. Nam condimentum, enim ut rhoncus sagittis, tellus
                  mi sodales erat, nec ornare nunc nisi sed tortor.
                </p>
              </div>
            </div>

            <section className="projetcs__section">
              <h1 className="projects__title">Meus projetos</h1>

              <ul className="projects__ul">
                <li className="projects__li">
                  <div className="projects__name">
                    <img
                      src={logo}
                      alt="imagem do projeto"
                      className="projects__img"
                    />
                    <div className="projects__div-1">
                      <p className="projects__myproject">meu projeto</p>
                      <p className="projects__lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="projects__icons">
                    <AiFillGithub size={30} />
                    <AiOutlinePaperClip size={30} />
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </MainPortifolioCSS>
    </>
  );
};
