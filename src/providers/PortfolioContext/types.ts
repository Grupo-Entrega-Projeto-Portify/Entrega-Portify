import { IProject } from "../ProjectContext/types";

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
	portfolios: IPortfolio[];
	fetchPortfolios: () => Promise<void>;
	createPortfolio: (portfolioData: ICreatePortfolioInput) => Promise<void>;
	updatePortfolio: (
		portfolioId: number,
		portfolioData: IUpdatePortfolioInput
	) => Promise<void>;
}

export interface IPortfolio {
	id: number;
	userId: number;
	position: string;
	description: string;
	projects: IProject;
}

export interface ICreatePortfolioInput {
	userId: number;
	position: string;
	description: string;
}

export interface IUpdatePortfolioInput {
	position?: string;
	description?: string;
}
