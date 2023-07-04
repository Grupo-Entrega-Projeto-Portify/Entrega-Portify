
export interface IPortifolioProviderProps {
    children: React.ReactNode
}

export interface IPortifolioContext {
    modalCreate: boolean
    setModalCreate: React.Dispatch<React.SetStateAction<boolean>>
}