import { createContext, useState } from "react"
import { IPortifolioContext, IPortifolioProviderProps } from "./types"

export const PortifolioContext = createContext({} as IPortifolioContext)

export const PortifolioProvider = ({ children }: IPortifolioProviderProps) => {
    const [modalCreate, setModalCreate] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    
    return (
        <PortifolioContext.Provider value={{modalCreate, setModalCreate, modalEdit, setModalEdit, modalDelete, setModalDelete}}>
            {children}
        </PortifolioContext.Provider>
    )
}