import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { cadasterFormSchema, TCadasterFormValues } from "./cadasterFormSchema";
import { Input } from "../Input";

export const CadasterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TCadasterFormValues>({
		resolver: zodResolver(cadasterFormSchema),
	});

	const submit: SubmitHandler<TCadasterFormValues> = async (data) => {
		// userRegister(data);
	};

	// const { userRegister } = useContext(UserContext);

	// const handleReturn = () => {};

	return (
		<div>
			<button onClick={}>Voltar</button>
			<h1>CADASTRE-SE</h1>
			<form onSubmit={handleSubmit(submit)}>
				<div>
					<Input
						label="Nome"
						type="text"
						placeholder="Digite o seu nome"
						register={register("name")}
					/>
					{errors.name && <p>{errors.name.message}</p>}
				</div>
				<div>
					<Input
						label="E-mail"
						type="email"
						placeholder="Digite o seu email"
						register={register("email")}
					/>
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div>
					<Input
						label="Senha"
						type="password"
						placeholder="Digite a sua senha"
						register={register("password")}
					/>
					{errors.password && <p>{errors.password.message}</p>}
				</div>
				<div>
					<Input
						label="Confirmação de senha"
						type="password"
						placeholder="Digite novamente sua senha"
						register={register("confirm")}
					/>
					{errors.confirm && <p>{errors.confirm.message}</p>}
				</div>
				<button type="submit">Cadastrar</button>
			</form>
		</div>
	);
};
