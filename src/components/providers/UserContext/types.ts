import { TRegisterFormValues } from "../../RegisterForm/registerFormSchema"

export interface IUserProviderProps {
	children: React.ReactNode
}

export interface IUser {
	id: number
	name: string
	email: string
}

export interface IUserLoginResponse {
	accessToken: string
	user: IUser
}

export interface IUserContext {
	user: IUser | null
	userRegister: (formData: TRegisterFormValues) => void
	userLogin: (formData: any) => void
	userLogout: () => void
}
