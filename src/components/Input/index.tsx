import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
	type: "text" | "email" | "number" | "password";
	placeholder?: string;
	register: UseFormRegisterReturn<string>;
	label?: string;
}
export const Input = ({ type, placeholder, register, label }: IInputProps) => {
	return (
		<div>
            {label ? <label>{label}</label> : null}
			<input type={type} placeholder={placeholder} {...register} />
		</div>
	);
};
