
export interface IPortifolioProviderProps {
    children: React.ReactNode
}

export interface IPortifolioContext {
    modalCreate: boolean
    setModalCreate: React.Dispatch<React.SetStateAction<boolean>>
    modalEdit: boolean
    setModalEdit: React.Dispatch<React.SetStateAction<boolean>>
    modalDelete: boolean
    setModalDelete: React.Dispatch<React.SetStateAction<boolean>>
}