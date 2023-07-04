import { createContext } from "react"
import { IPortifolioProviderProps } from "./types"

export const PorfilioContext = createContext({})

export const PortifolioProvider = ({ children }: IPortifolioProviderProps) => {


    return (
        <PorfilioContext.Provider value={{}}>
            {children}
        </PorfilioContext.Provider>
    )
}