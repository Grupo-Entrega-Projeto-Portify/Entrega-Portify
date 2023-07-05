import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
	type: "text" | "email" | "number" | "password";
	placeholder?: string;
	register?: UseFormRegisterReturn<string>;
	label?: string;
	className?: string;
}
export const Input = ({ className, type, placeholder, register, label }: IInputProps) => {
	return (
		<>
            {label ? <label>{label}</label> : null}
			<input className={className} type={type} placeholder={placeholder} {...register} />
		</>

	);
};
