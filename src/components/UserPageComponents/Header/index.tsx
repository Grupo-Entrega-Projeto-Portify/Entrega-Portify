import { HeaderUserPageCSS } from "./styled"
import logo from "../../../assets/Logo.png"
import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../../providers/UserContext/UserContext"
import { Link } from "react-router-dom"


export const HeaderUserPage = () => {
    const { userLogout } = useContext(UserContext)
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
                        <Link to="/"><img src={logo} alt="logo da Portify" /> </Link>
                        <div className="header__divButton">
                            <p className="header__userName">{userName}</p>
                            <button className="header__button" onClick={userLogout}>Sair</button>
                        </div>
                    </div>
                </nav>
            </HeaderUserPageCSS>
        </>
    )
}