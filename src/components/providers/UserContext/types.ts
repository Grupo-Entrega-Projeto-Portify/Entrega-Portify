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
	userCadaster: (formData: TCadasterForm) => void
	userLogin: (formData: any) => void
	userLogout: () => void
}

export type TCadasterForm = {
	name: string
	email: string
	password: string
}
