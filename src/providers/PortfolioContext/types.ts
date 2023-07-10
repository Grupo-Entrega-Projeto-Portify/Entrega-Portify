import { IProject } from "../ProjectContext/types"

export interface IPortfolioProviderProps {
	children: React.ReactNode;
}

export interface IPortfolioContext {
	modalCreate: boolean;
	setModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
	modalEdit: boolean;
	setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
	modalDelete: boolean;
	setModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
	modalCreatePortfolio: boolean;
	setModalCreatePortfolio: React.Dispatch<React.SetStateAction<boolean>>;
	portfolios: IPortfolio[];
	fetchPortfolios: (userId: number) => Promise<void>;
	createPortfolio: (portfolioData: ICreatePortfolioInput) => Promise<void>;
	updatePortfolio: (
		portfolioId: number,
		portfolioData: IUpdatePortfolioInput | null
	) => Promise<void>;
	fetchUser: (userId: number) => Promise<void>;
	userPortfolioId: number | null;
	setPortfolios: React.Dispatch<React.SetStateAction<IPortfolio[]>>;
	updatedPortfolio: IPortfolio | IUpdatePortfolioInput | null;
	portfolioData: IPortfolio | IUpdatePortfolioInput | null;
	setPortfolioData: React.Dispatch<React.SetStateAction<IPortfolio | IUpdatePortfolioInput | null>>;
	userName: IUser | null;
	setUpdatedPortfolio: React.Dispatch<React.SetStateAction<IPortfolio | IUpdatePortfolioInput | null>>;
}

export interface IPortfolio {
	id: number;
	userId: number;
	color: string;
	position: string;
	description: string;
	projects: IProject[];
}

export interface ICreatePortfolioInput {
	userId: number;
	color: string;
	position: string;
	description: string;
}

export interface IUpdatePortfolioInput {
	color?: string;
	position?: string;
	description?: string;
}

export interface IUser {
	email: string;
	name: string;
	id: number;
}