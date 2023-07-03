import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { cadasterFormSchema, TCadasterFormValues } from "./cadasterFormSchema";

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
      <button onClick={handleReturn}>Voltar</button>
			<h1>CADASTRE-SE</h1>
			<form onSubmit={handleSubmit(submit)}>
				<div>
					<label htmlFor="name">Nome</label>
					<input {...register("name")} />
					{errors.name && <span>{errors.name.message}</span>}
				</div>
				<div>
					<label htmlFor="email">E-mail</label>
					<input {...register("email")} />
					{errors.email && <span>{errors.email.message}</span>}
				</div>
				<div>
					<label htmlFor="password">Senha</label>
					<input
						type="password"
						{...register("password")}
					/>
					{errors.password && <span>{errors.password.message}</span>}
				</div>
				<div>
					<label htmlFor="confirm">Confirmar Senha</label>
					<input
						type="password"
						{...register("confirm")}
					/>
					{errors.confirm && <span>{errors.confirm.message}</span>}
				</div>
				<button type="submit">Cadastrar</button>
			</form>
		</div>
	);
};
