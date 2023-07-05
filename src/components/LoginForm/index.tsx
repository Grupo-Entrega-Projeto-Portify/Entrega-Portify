import { useForm, SubmitHandler } from "react-hook-form";
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainLoginCSS } from "./loginStyle";
import fotoLogin from "../../assets/photoLogin.svg"
import { UserContext } from "../../providers/UserContext/UserContext";
import { PortifolioContext } from "../../providers/PortfolioContext/PortfolioContext";
import { Modal } from "../Modal";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const { userLogin } = useContext(UserContext);

  const { modalCreate, setModalCreate, modalEdit, setModalEdit, modalDelete, setModalDelete } = useContext(PortifolioContext);

  const submit: SubmitHandler<TLoginFormValues> = (dataForm) => {
    userLogin(dataForm);
    console.log(dataForm);
    reset();
  };

  return (
    <MainLoginCSS>
      <section className="main__section">
        <div className="div__conteiner">

            <div className="main__imgDiv">
                <img className="main__img" src={fotoLogin} alt="Pessoa usando um tablet" />
            </div>
            <div className="main_loginDiv">
            <h1 className="main__loginTitle">Login</h1>
            <p className="main__text">Acesse o portifólio</p>
            <form className="main__form" onSubmit={handleSubmit(submit)}>
                <fieldset className="main__fieldset">

                <Input
                className="main__input"
                type="email"
                placeholder="E-mail"
                register={register("email")}
                />
                {errors.email ? <p className="text__error">{errors.email.message}</p> : null}
                </fieldset>
                <fieldset className="main__fieldset">

                <Input
                className="main__input"
                type="password"
                placeholder="Senha"
                register={register("password")}
                />
                {errors.password ? <p className="text__error">{errors.password.message}</p> : null}
                </fieldset>

                <button className="main__button">entrar</button>
            </form>
            <p className="main__p">Não possui cadastro?</p>
            <Link className="main__goToRegister" to={"/registerpage"}>cadastre-se</Link>
            </div>
        </div>
      </section>
      <button onClick={() => setModalCreate(true)}>Criar projeto</button>
      {modalCreate ? <Modal>
        <h1>Criar projeto</h1>
        <button onClick={() => setModalCreate(false)}>X</button>
        <form >
            <Input
                className="main__input"
                type="text"
                placeholder="Nome"
                register={register("email")}
            />
            <Input
                className="main__input"
                type="text"
                placeholder="Descrição resumida"
                register={register("email")}
            />        
            <Input
                className="main__input"
                type="text"
                placeholder="Repositório"
                register={register("email")}
            />
            <Input
                className="main__input"
                type="text"
                placeholder="Link do deploy (opcional)"
                register={register("email")}
            />
            <Input
                className="main__input"
                type="text"
                placeholder="URL da imagem (opcional)"
                register={register("email")}
            />

            <button>Criar projeto</button>
        </form>
      </Modal> :null}


      <button onClick={() => setModalEdit(true)}>Editar projeto</button>
      {modalEdit ? <Modal>
        <h1>Editar projeto</h1>
        <button onClick={() => setModalEdit(false)}>X</button>
        <form >
            <Input
                className="main__input"
                type="text"
                placeholder="aparecer nome do projeto"
                register={register("email")}
            />
            <Input
                className="main__input"
                type="text"
                placeholder="conteúdo já existente"
                register={register("email")}
            />        
            <Input
                className="main__input"
                type="text"
                placeholder="link se tiver ou não"
                register={register("email")}
            />
            <Input
                className="main__input"
                type="text"
                placeholder="Link do deploy (opcional)"
                register={register("email")}
            />
            <Input
                className="main__input"
                type="text"
                placeholder="URL da imagem (opcional)"
                register={register("email")}
            />

            <button>Editar projeto</button>
        </form>
      </Modal> :null}


      <button onClick={() => setModalDelete(true)}>Deletar projeto</button>
      {modalDelete ? <Modal>
        <h1>Cancelar projeto</h1>
        <button onClick={() => setModalDelete(false)}>X</button>
        <div>

            <span>Deseja deletar o (nome do projeto)?</span>
            <button onClick={() => setModalDelete(false)}>cancelar</button>
            <button>deletar</button>
        </div>
      </Modal> :null}

    </MainLoginCSS>
  );
};
