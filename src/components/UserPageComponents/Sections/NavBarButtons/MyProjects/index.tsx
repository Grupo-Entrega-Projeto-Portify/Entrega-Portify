import { useEffect, useState } from "react"
import { SectionNoProjectsUserPage } from "./NoProjects"
import { SectionAllProjectsUserPage } from "./Projects"


export const SectionMyProjectsUserPage = () => {

    return (
        <>
            <section>
                <div>
                    <h2>Meus projetos</h2>
                    <button>Adicionar Projeto</button>
                </div>
            </section>
        </>
    )
}