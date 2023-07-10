import {
	createContext,
	useState,
	useEffect,
	useContext,
} from "react"
import {
	IPortfolio,
	IPortfolioContext,
	IPortfolioProviderProps,
	ICreatePortfolioInput,
	IUpdatePortfolioInput,
	IUser,
} from "./types"
import { api } from "../../services/api"
import { UserContext } from "../UserContext/UserContext"

export const PortfolioContext = createContext({} as IPortfolioContext)

export const PortifolioProvider = ({ children }: IPortfolioProviderProps) => {
	const [modalCreate, setModalCreate] = useState(false)
	const [modalEdit, setModalEdit] = useState(false)
	const [modalDelete, setModalDelete] = useState(false)
	const [modalCreatePortfolio, setModalCreatePortfolio] = useState(false)
	const [portfolios, setPortfolios] = useState<IPortfolio[]>([])
	const { user } = useContext(UserContext)
	const [userName, setUserName] = useState<IUser | null>(null)
	const [updatedPortfolio, setUpdatedPortfolio] = useState<IPortfolio | IUpdatePortfolioInput | null>(
		null
	)
	const [portfolioData, setPortfolioData] = useState<IPortfolio | IUpdatePortfolioInput | null>(null)

	const fetchPortfolios = async (userId: number) => {
		if (userId) {
		  const { data } = await api.get(`/portfolios?_embed=projects&userId=${userId}`);
		  setPortfolios(data)
		  setPortfolioData(data[0])
		}
	  };

	const fetchUser = async (userId:number) => {
		try {
			const response = await api.get(`/users/${userId}`)
			setUserName(response.data)
		} catch (error) {
		}
	}

	useEffect(() => {
		if (user) {
			const userString = localStorage.getItem("@USER")
			if (userString) {
				const user = JSON.parse(userString)
				const userId = user.id
				fetchPortfolios(userId)
			}
		}
	}, [user, fetchPortfolios])

	const createPortfolio = async (portfolioData: ICreatePortfolioInput) => {
		try {
			const token = localStorage.getItem("@TOKEN")
			const response = await api.post("/portfolios", portfolioData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			const createdPortfolio = response.data
			setPortfolios((prevPortfolios) => [...prevPortfolios, createdPortfolio])
		} catch (error) {
		}
	}

	const updatePortfolio = async (
		portfolioId: number,
		portfolioData: IUpdatePortfolioInput | IPortfolio | null
	) => {
		try {
			const token = localStorage.getItem("@TOKEN")
			await api.patch(`/portfolios/${portfolioId}`, portfolioData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			setPortfolioData(portfolioData)
		} catch (error) {
		}
	}

	const [userPortfolioId, setUserPortfolioId] = useState<number | null>(null)

	useEffect(() => {
		if (portfolios.length > 0) {
			setUserPortfolioId(portfolios[0].id)
		}
	}, [portfolios])

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
				fetchUser,
				userPortfolioId,
				setPortfolios,
				updatedPortfolio,
				portfolioData,
				setPortfolioData,
				userName,
				setUpdatedPortfolio
			}}
		>
			{children}
		</PortfolioContext.Provider>
	)
}
