import { useEffect, useState } from "react"
import { FormInfoUser } from "./styled"

export const SectionInformationUserPage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("@USER");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name);
      setUserEmail(user.email);
    }
  }, []);

  return (
    <>
      <FormInfoUser>
        <section className="info__section">
          <div className="div__center">
            <h2 className="info__title">Informações no perfil:</h2>
            <div className="info__divProfile">
              <h3 className="info__h3Name">
                Nome: <span className="info__name">{userName}</span>
              </h3>
              <h3 className="info__h3email">
                E-mail: <span className="info__email">{userEmail}</span>
              </h3>
            </div>
          </div>
          <fieldset className="info__fieldset">
            <label className="info__label">Modo de Cor</label>
            <select className="info__input">
              <option>Claro</option>
              <option>Escuro</option>
            </select>
          </fieldset>

          <fieldset className="info__fieldset">
            <label className="info__label">Cargo</label>
            <input type="text" placeholder="Cargo" className="info__input" />
          </fieldset>

          <fieldset className="info__fieldset">
            <label className="info__label">Descrição</label>
            <textarea placeholder="Descrição" className="info__textarea" />
          </fieldset>
          <div className="info__buttonDiv">
            <button className="info__button">Atualizar portfólio</button>
          </div>
        </section>
      </FormInfoUser>
    </>
  );
};
