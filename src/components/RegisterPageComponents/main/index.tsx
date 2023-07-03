import { MainRegisterCSS } from "./main"



export const MainRegister = () => {


    return(
        <>
        <MainRegisterCSS>
            <section className="main__section">
                <div className="main__div">
                <button className="main__button">voltar</button>
                
                <h1 className="main__title">Cadastre-se</h1>
                <p className="main__text">Preencha os campos abaixo para criar uma conta</p>
                <div className="main__div-input">
                    <input placeholder="nome" type="text" className="main__input" />
                    <input placeholder="email" type="email" className="main__input" />
                    <input placeholder="senha" type="password" className="main__input" />
                    <input placeholder="senha" type="password" className="main__input" />
                </div>
                
                </div>
            </section>
        </MainRegisterCSS>
        </>
    )
}