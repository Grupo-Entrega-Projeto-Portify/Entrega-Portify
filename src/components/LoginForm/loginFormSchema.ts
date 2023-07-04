import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().min(1, "O email é obrigatório").email("Forneça um email válido."),
    password: z.string().min(8, "A senha precisa conter pelo menos 8 caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .regex(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/, 'É necessário pelo menos um caractere especial')
})

export type TLoginFormValues = z.infer<typeof loginFormSchema>