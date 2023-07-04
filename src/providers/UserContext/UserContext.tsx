import { createContext, useState } from "react"
import {
	IUser,
	IUserContext,
	IUserLoginResponse,
	IUserProviderProps,
} from "./types"
import { api } from "../../services/api"
import { TRegisterFormValues } from "../../components/RegisterForm/registerFormSchema"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { TLoginFormValues } from "../../components/LoginForm/loginFormSchema"

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
	const [user, setUser] = useState<IUser | null>(null)
    const navigate = useNavigate()

	const userRegister = async (formData: TRegisterFormValues) => {
		try {
			const { data } = await api.post("/users", formData)
			console.log(data)
			console.log("Cadastro efetuado com sucesso!")
			toast.success("Cadastro efetuado com sucesso!")
            navigate("/loginpage")
		} catch (error) {
            toast.error("Ops! Algo deu errado")
			console.log(error)
		}
	}

	const userLogin = async (formData: TLoginFormValues) => {
		try {
			const { data } = await api.post("/login", formData)
			setUser(data.user)
			localStorage.setItem("@TOKEN", data.accessToken)
			localStorage.setItem("@USERID", JSON.stringify(data.user.id))
			toast.success("Login realizado com sucesso!")
            navigate("/userPage")
		} catch (error) {
            toast.error("Ops! Algo deu errado")
			console.log(error)
		}
	}

	const userLogout = () => {
		setUser(null)
		localStorage.removeItem("@TOKEN")
		localStorage.removeItem("@USERID")
	}

	return (
		<UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
			{children}
		</UserContext.Provider>
	)
}
