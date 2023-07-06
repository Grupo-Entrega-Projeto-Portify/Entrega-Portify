import { useEffect, useState } from "react"
import { ModalCreatePortfolio } from "../../../ModalCreatePortfolio/index.tsx"

export const SectionStartPerfilUserPage = () => {

    return (
        <>
            <section>
                <h2>Seu Portfólio ainda não está publicado</h2>
                <ModalCreatePortfolio />
            </section>
        </>
    )
}