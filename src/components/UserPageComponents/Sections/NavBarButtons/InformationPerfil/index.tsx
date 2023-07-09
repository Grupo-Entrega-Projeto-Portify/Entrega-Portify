import { useContext, useEffect, useState } from "react"
import { FormInfoUser } from "./styled"
import { PortfolioContext } from "../../../../../providers/PortfolioContext/PortfolioContext"

export const SectionInformationUserPage = () => {
	const [userName, setUserName] = useState("")
	const [userEmail, setUserEmail] = useState("")
	const { updatePortfolio, portfolios, portfolioData, setPortfolioData } =
		useContext(PortfolioContext)

	useEffect(() => {
		const storedUser = localStorage.getItem("@USER")
		if (storedUser) {
			const user = JSON.parse(storedUser)
			setUserName(user.name)
			setUserEmail(user.email)
		}
	}, [])


	const handleUpdatePortfolio = async () => {
		try {
			const portfolioId = portfolios.length > 0 ? portfolios[0].id : null
			if (portfolioId) {
				await updatePortfolio(portfolioId, portfolioData)
			}
		} catch (error) {
		}
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setPortfolioData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	return (
		<>
			<FormInfoUser>
				<section className="info__section">
					<div className="div__center">
						<h2 className="info__title">Informações no perfil:</h2>
						<div className="info__divProfile">
							<h3 className="info__h3Name">
								Nome: <span className="info__name">{userName}</span>
							</h3>
							<h3 className="info__h3email">
								E-mail: <span className="info__email">{userEmail}</span>
							</h3>
						</div>
					</div>
					<fieldset className="info__fieldset">
						<label className="info__label">Modo de Cor</label>
						<select
							className="info__input"
							name="color"
							value={portfolioData.color}
							onChange={handleInputChange}
						>
							<option value="Claro">Claro</option>
							<option value="Escuro">Escuro</option>
						</select>
					</fieldset>

					<fieldset className="info__fieldset">
						<label className="info__label">Cargo</label>
						<input
							type="text"
							placeholder="Cargo"
							className="info__input"
							name="position"
							value={portfolioData.position}
							onChange={handleInputChange}
						/>
					</fieldset>

					<fieldset className="info__fieldset">
						<label className="info__label">Descrição</label>
						<textarea
							placeholder="Descrição"
							className="info__textarea"
							name="description"
							value={portfolioData.description}
							onChange={handleInputChange}
						/>
					</fieldset>
					<div className="info__buttonDiv">
						<button type="button" className="info__button" onClick={handleUpdatePortfolio}>
							Atualizar portfólio
						</button>
					</div>
				</section>
			</FormInfoUser>
		</>
	)
}
