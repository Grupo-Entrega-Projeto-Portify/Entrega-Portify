import { Route, Routes } from 'react-router-dom'
import { CadastroPage } from '../Pages/Cadastro'


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/Cadastro'> <CadastroPage /></Route>
        </Routes >
    )
}
