import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { registerFormSchema, TRegisterFormValues } from "./registerFormSchema"
import { Input } from "../Input"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"
import { Link } from "react-router-dom"
import { MainRegisterCSS } from "../RegisterPageComponents/main/main"
import { AiOutlineArrowLeft } from "react-icons/ai"

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  })

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData)
  }

  return (
    <MainRegisterCSS>
      <section className="main__section">
        <div className="main__div">
          <Link className="main__back" to="/loginpage">
            <AiOutlineArrowLeft /> Voltar
          </Link>

          <h1 className="main__title">Cadastre-se</h1>
          <p className="main__text">
            Preencha os campos abaixo para criar uma conta
          </p>
          <form onSubmit={handleSubmit(submit)} className="main__div-input">
            <fieldset className="main__fieldset">
              <Input
                className="main__input"
                type="text"
                placeholder="Digite o seu nome"
                register={register("name")}
              />
              {errors.name && <p className="error__p">{errors.name.message}</p>}
            </fieldset>
            <fieldset className="main__fieldset">
              <Input
                className="main__input"
                type="email"
                placeholder="Digite o seu email"
                register={register("email")}
              />
              {errors.email && (
                <p className="error__p">{errors.email.message}</p>
              )}
            </fieldset >
            <fieldset className="main__fieldset">
              <Input
                className="main__input"
                type="password"
                placeholder="Digite a sua senha"
                register={register("password")}
              />
              {errors.password && (
                <p className="error__p">{errors.password.message}</p>
              )}
            </fieldset>
            <fieldset className="main__fieldset">
              <Input
                className="main__input"
                type="password"
                placeholder="Digite novamente sua senha"
                register={register("confirm")}
              />
              {errors.confirm && (
                <p className="error__p">{errors.confirm.message}</p>
              )}
            </fieldset>
			<div className="main__buttonRegister">
            <button className="main__register-button" type="submit">Cadastrar</button>
			</div>
          </form>
        </div>
      </section>
    </MainRegisterCSS>
  )
}
