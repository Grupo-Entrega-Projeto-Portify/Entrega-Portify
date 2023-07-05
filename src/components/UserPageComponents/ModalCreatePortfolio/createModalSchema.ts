import { z } from "zod"

export const CreateModalSchema = z.object({
    color:z.string(),
    position: z.string().nonempty("Nome obrigatório."),
    description: z.string(),
})

export type TCreateModalValues = z.infer<typeof CreateModalSchema>