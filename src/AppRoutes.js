import React, { useContext } from 'react';
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from './pages/Home';
import EditarTarefa from './pages/editarTarefa';
import CadastrarTarefa from './pages/cadastrarTarefa';
import ListarTarefas from './pages/listarTarefas';
import CadastrarMembro from './pages/cadastrarMembro';
import LoginMembro from './pages/login';
import { membroContext } from './context/membroContext';

function AppRoutes() {
    const {membroLogado} = useContext(membroContext)

    const ProtectedRoute = ({children}) => {
        if(!membroLogado)
            return <Navigate to={"/login"} replace />
        return children;
    }

    return (
        <Routes>
            <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path='/login' element={<LoginMembro/>} />
            <Route path='/editarTarefa' element={<ProtectedRoute><EditarTarefa/></ProtectedRoute>} />
            <Route path='/cadastrarTarefa' element={<ProtectedRoute><CadastrarTarefa/></ProtectedRoute>} />
            <Route path='/listarTarefas' element={<ProtectedRoute><ListarTarefas/></ProtectedRoute>} />
            <Route path='/cadastrarMembro' element={<CadastrarMembro/>} />
        </Routes>
    )
}

export default AppRoutes;