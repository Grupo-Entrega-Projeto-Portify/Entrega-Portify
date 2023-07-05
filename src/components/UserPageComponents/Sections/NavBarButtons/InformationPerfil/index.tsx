import { useEffect, useState } from "react"

export const SectionInformationUserPage = () => {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")

    useEffect(() => {
        const storedUser = localStorage.getItem("@USER")
        if (storedUser) {
            const user = JSON.parse(storedUser)
            setUserName(user.name)
            setUserEmail(user.email)
        }
    }, [])

    return (
        <>
            <section>
                <h2>Informações no perfil:</h2>
                <div>
                    <h3>Nome: <span>{userName}</span></h3>
                    <h3>E-mail: <span>{userEmail}</span></h3>
                </div>
                <label>
                    <p>Modo de Cor</p>
                    <select>
                        <option>Claro</option>
                        <option>Escuro</option>
                    </select>
                </label>
                <label>
                    <p>Cargo</p>
                    <input type="text" placeholder="Cargo" />
                </label>
                <label>
                    <p>Descrição</p>
                    <textarea placeholder="Descrição" />
                </label>
                <button>Atualizar portfólio</button>
            </section>
        </>
    )
}
