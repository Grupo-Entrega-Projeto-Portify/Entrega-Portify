import { useForm, SubmitHandler } from "react-hook-form"
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../providers/UserContext/UserContext"

export const LoginForm = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm<TLoginFormValues>({
        resolver: zodResolver(loginFormSchema)
    })

    const { userLogin } = useContext(UserContext)

    const submit: SubmitHandler<TLoginFormValues> = (dataForm) => {
        userLogin(dataForm)
        console.log(dataForm)
        reset()
    }

    return (
        <div>
            <h1>Login</h1>
            <p>Acesse o portifólio</p>
            <form onSubmit={handleSubmit(submit)}>
                <Input type="email" placeholder="E-mail" register={register("email")}/>
                {errors.email ? <p>{errors.email.message}</p> : null}
                <Input type="password" placeholder="Senha" register={register("password")} />
                {errors.password ? <p>{errors.password.message}</p> : null}

                <button>entrar</button>
            </form> 
            <p>Não possui cadastro?</p>
            <Link to={"/Cadastro"}>cadastre-se</Link>
        </div>
    )
}