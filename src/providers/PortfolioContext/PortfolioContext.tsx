import { createContext, useState, useEffect, useContext } from "react";
import {
	IPortfolio,
	IPortfolioContext,
	IPortfolioProviderProps,
	ICreatePortfolioInput,
	IUpdatePortfolioInput,
} from "./types";
import { api } from "../../services/api";
import { UserContext } from "../UserContext/UserContext";

export const PortfolioContext = createContext({} as IPortfolioContext);

export const PortifolioProvider = ({ children }: IPortfolioProviderProps) => {
	const [modalCreate, setModalCreate] = useState(false);
	const [modalEdit, setModalEdit] = useState(false);
	const [modalDelete, setModalDelete] = useState(false);
	const [modalCreatePortfolio, setModalCreatePortfolio] = useState(false);
	const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);
	const { user } = useContext(UserContext);

	const fetchPortfolios = async (userId) => {
		try {
			const response = await api.get(
				`/portfolios?_embed=projectsprojects&userId=${userId}`
			);
			setPortfolios(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (user) {
			const userString = localStorage.getItem("@USER");
			if (userString) {
				const user = JSON.parse(userString);
				const userId = user.id;
				fetchPortfolios(userId);
			}
		}
	}, [user, fetchPortfolios]);

	const createPortfolio = async (portfolioData: ICreatePortfolioInput) => {
		try {
			const token = localStorage.getItem("@TOKEN");
			const response = await api.post("/portfolios", portfolioData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const createdPortfolio = response.data;
			setPortfolios((prevPortfolios) => [...prevPortfolios, createdPortfolio]);
		} catch (error) {
			console.log(error);
		}
	};

	const updatePortfolio = async (
		portfolioId: number,
		portfolioData: IUpdatePortfolioInput
	) => {
		try {
			const token = localStorage.getItem("@TOKEN");
			await api.put(`/portfolios/${portfolioId}`, portfolioData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setPortfolios((prevPortfolios) =>
				prevPortfolios.map((portfolio) =>
					portfolio.id === portfolioId
						? { ...portfolio, ...portfolioData }
						: portfolio
				)
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<PortfolioContext.Provider
			value={{
				modalCreate,
				setModalCreate,
				modalEdit,
				setModalEdit,
				modalDelete,
				setModalDelete,
				modalCreatePortfolio,
				setModalCreatePortfolio,
				portfolios,
				fetchPortfolios,
				createPortfolio,
				updatePortfolio,
			}}
		>
			{children}
		</PortfolioContext.Provider>
	);
};
