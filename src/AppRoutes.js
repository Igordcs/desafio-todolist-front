import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/Home';
import EditarTarefa from './pages/editarTarefa';
import CadastrarTarefa from './pages/cadastrarTarefa';
import ListarTarefas from './pages/listarTarefas';
import CadastrarMembro from './pages/cadastrarMembro';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/editarTarefa' Component={EditarTarefa} />
                <Route path='/cadastrarTarefa' Component={CadastrarTarefa} />
                <Route path='/listarTarefas' Component={ListarTarefas} />
                <Route path='/cadastrarMembro' Component={CadastrarMembro} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;