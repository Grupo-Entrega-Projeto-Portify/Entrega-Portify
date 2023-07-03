import { useForm, SubmitHandler } from "react-hook-form"
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TLoginFormValues>({
        resolver: zodResolver(loginFormSchema)
    })

    const submit: SubmitHandler<TLoginFormValues> = (formData) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input type="email" placeholder="Escreva seu email aqui" register={register("email")}/>
            {/* <input type="email" placeholder="Escreva seu email aqui" register={register("email")} /> */}
            {errors.email ? <p>{errors.email.message}</p> : null}
            <Input type="email" placeholder="Escreva seu email aqui" register={register("password")} />
            {errors.password ? <p>{errors.password.message}</p> : null}

            <button>entrar</button>
        </form>
    )
}