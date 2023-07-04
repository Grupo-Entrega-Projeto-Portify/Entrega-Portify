import { TLoginFormValues } from "../../components/LoginForm/loginFormSchema"
import { TRegisterFormValues } from "../../components/RegisterForm/registerFormSchema"

export interface IUserProviderProps {
	children: React.ReactNode
}

export interface IUser {
	id: number
	name: string
	email: string
}

export interface IUserContext {
	user: IUser | null
	userRegister: (formData: TRegisterFormValues) => Promise<void>
	userLogin: (formData: TLoginFormValues) => Promise<void>
	userLogout: () => void
}
