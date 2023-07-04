
import { HeaderUserPageCSS } from "./styled"
import logo from "../../../assets/Logo.png"
import { useEffect, useState } from "react"

export const HeaderUserPage = () => {

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
            <HeaderUserPageCSS>
                <nav className="header__nav">
                    <div className="header__div">
                        <img src={logo} alt="logo da Portify" />
                        <div className="header__divButton">
                            <p className="header__userName">{userName}</p>
                            <button className="header__button">Sair</button>
                        </div>
                    </div>
                </nav>
            </HeaderUserPageCSS>
        </>
    )
}