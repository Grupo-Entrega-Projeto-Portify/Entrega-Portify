import { useEffect, useState } from "react"
import { SectionNoProjectsUserPage } from "./NoProjects"
import { SectionAllProjectsUserPage } from "./Projects"
import { ModalCreate } from "../../../ModalCreate/index.tsx"


export const SectionMyProjectsUserPage = () => {

    return (
        <>
            <section>
                <div>
                    <h2>Meus projetos</h2>
                    <ModalCreate />
                </div>
            </section>
        </>
    )
}