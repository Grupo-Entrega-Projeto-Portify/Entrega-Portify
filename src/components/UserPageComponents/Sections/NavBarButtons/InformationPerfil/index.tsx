import { useContext, useEffect, useState } from "react";
import { FormInfoUser } from "./styled";
import { PortfolioContext } from "../../../../../providers/PortfolioContext/PortfolioContext";

export const SectionInformationUserPage = () => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const { updatePortfolio, portfolios, updatedPortfolio, setSelectedPortfolio } =
		useContext(PortfolioContext);
	const [portfolioData, setPortfolioData] = useState({
		color: "",
		position: "",
		description: "",
	});

	useEffect(() => {
		const storedUser = localStorage.getItem("@USER");
		if (storedUser) {
			const user = JSON.parse(storedUser);
			setUserName(user.name);
			setUserEmail(user.email);
		}
	}, []);

	const userPortfolio = portfolios.length > 0 ? portfolios[0] : null;

	useEffect(() => {
		if (userPortfolio) {
			setPortfolioData({
				color: userPortfolio.color,
				position: userPortfolio.position,
				description: userPortfolio.description,
			});
		}
	}, [userPortfolio]);

	useEffect(() => {
		if (updatedPortfolio) {
			setSelectedPortfolio(updatedPortfolio);
		}
	}, [updatedPortfolio]);

	const handleUpdatePortfolio = async () => {
		try {
			const portfolioId = portfolios.length > 0 ? portfolios[0].id : null;
			if (portfolioId) {
				const updatedPortfolioData = {
					color: portfolioData.color,
					position: portfolioData.position,
					description: portfolioData.description,
				};
				await updatePortfolio(portfolioId, updatedPortfolioData);
				console.log(updatedPortfolioData);
			}
		} catch (error) {
			console.log(error);
		}
	};

	console.log(portfolioData);

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
							value={portfolioData.color}
							onChange={(e) =>
								setPortfolioData((prevData) => ({
									...prevData,
									color: e.target.value,
								}))
							}
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
							value={portfolioData.position}
							onChange={(e) =>
								setPortfolioData((prevData) => ({
									...prevData,
									position: e.target.value,
								}))
							}
						/>
					</fieldset>

					<fieldset className="info__fieldset">
						<label className="info__label">Descrição</label>
						<textarea
							placeholder="Descrição"
							className="info__textarea"
							value={portfolioData.description}
							onChange={(e) =>
								setPortfolioData((prevData) => ({
									...prevData,
									description: e.target.value,
								}))
							}
						/>
					</fieldset>
					<div className="info__buttonDiv">
						<button className="info__button" onClick={handleUpdatePortfolio}>
							Atualizar portfólio
						</button>
					</div>
				</section>
			</FormInfoUser>
		</>
	);
};
