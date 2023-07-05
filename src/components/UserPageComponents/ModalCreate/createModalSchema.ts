import { z } from "zod";

export const CreateModalSchema = z.object({
    name: z.string().nonempty("Nome obrigatório."),
    description: z.string().nonempty("A descrição é obrigatória."),
})

export type TCreateModalValues = z.infer<typeof CreateModalSchema>