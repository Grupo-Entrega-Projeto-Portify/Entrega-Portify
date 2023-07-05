import { useEffect, useState } from "react"
import { Infos, UserNameStyled, Title, Section, DivWelcome } from "./styled"


export const SectionWelcomeUserPage = () => {
    const [userName, setUserName] = useState("")

    useEffect(() => {
        const storedUser = localStorage.getItem("@USER")
        if (storedUser) {
            const user = JSON.parse(storedUser)
            setUserName(user.name)
        }
    }, [])

    return (
        <>
            <Section>
                <DivWelcome>
                    <Title>Seja bem Vindo:</Title>
                    <UserNameStyled>{userName}</UserNameStyled>
                </DivWelcome>
                <Infos>Selecione uma das opçoes abaixo</Infos>
            </Section>
        </>
    )
}