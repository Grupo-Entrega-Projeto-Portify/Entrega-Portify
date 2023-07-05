import { createContext, useState, useEffect, useContext } from "react";
import {
	IPortfolio,
	IPortifolioContext,
	IPortifolioProviderProps,
	IProject,
	ICreatePortfolioInput,
	IUpdatePortfolioInput,
} from "./types";
import { api } from "../../services/api";
import { UserContext } from "../UserContext/UserContext";

export const PortifolioContext = createContext({} as IPortifolioContext);

export const PortifolioProvider = ({ children }: IPortifolioProviderProps) => {
    const [modalCreate, setModalCreate] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
	const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);
	const { user } = useContext(UserContext);

	useEffect(() => {
		fetchPortfolios();
	}, []);

	const fetchPortfolios = async () => {
		try {
			const response = await api.get(
				`/portfolios?_embed=projectsprojects&userId=${user.id}`
			);
			setPortfolios(response.data);
		} catch (error) {
			console.log(error);
		}
	};

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
		<PortifolioContext.Provider
			value={{ modalCreate, setModalCreate, modalEdit, setModalEdit, modalDelete, setModalDelete, portfolios, fetchPortfolios, createPortfolio,
                updatePortfolio, }}
		>
			{children}
		</PortifolioContext.Provider>
	);
};


