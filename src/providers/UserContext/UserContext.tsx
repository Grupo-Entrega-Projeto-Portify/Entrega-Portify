import { createContext, useState } from "react"
import {
	IUser,
	IUserContext,
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
			await api.post("/users", formData)
			toast.success("Cadastro efetuado com sucesso!")
            navigate("/loginpage")
		} catch (error) {
            toast.error("Ops! Algo deu errado")
		}
	}

	const userLogin = async (formData: TLoginFormValues) => {
		try {
			const { data } = await api.post("/login", formData)
			setUser(data.user)
			localStorage.setItem("@TOKEN", data.accessToken)
			localStorage.setItem("@USER", JSON.stringify(data.user))
			toast.success("Login realizado com sucesso!")
            navigate("/userPage")
		} catch (error) {
            toast.error("Ops! Algo deu errado")
		}
	}
	

	const userLogout = () => {
		setUser(null)
		localStorage.removeItem("@TOKEN")
		localStorage.removeItem("@USER")
		navigate("/")
	}

	return (
		<UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
			{children}
		</UserContext.Provider>
	)
}
