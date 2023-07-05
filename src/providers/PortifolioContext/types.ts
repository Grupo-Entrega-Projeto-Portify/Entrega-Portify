export interface IPortifolioProviderProps {
	children: React.ReactNode
}

export interface IPortifolioContext {
    modalCreate: boolean
    setModalCreate: React.Dispatch<React.SetStateAction<boolean>>
    modalEdit: boolean
    setModalEdit: React.Dispatch<React.SetStateAction<boolean>>
    modalDelete: boolean
    setModalDelete: React.Dispatch<React.SetStateAction<boolean>>
	portfolios: IPortfolio[]
	fetchPortfolios: () => Promise<void>
}

export interface IPortfolio {
    id: number
	userId: number
	color: string
	position: string
	description: string
	projects: IProject[]
}

export interface ICreatePortfolioInput {
    color: string
    position: string
    description: string
}

export interface IUpdatePortfolioInput {
    color: string
    position: string
    description: string
}

export interface IProject {
    id: number
    portfolioId: number
    name: string
    repository: string
    link: string
}