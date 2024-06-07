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
import LoginMembro from './pages/login';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/login' Component={LoginMembro} />
            <Route path='/editarTarefa' Component={EditarTarefa} />
            <Route path='/cadastrarTarefa' Component={CadastrarTarefa} />
            <Route path='/listarTarefas' Component={ListarTarefas} />
            <Route path='/cadastrarMembro' Component={CadastrarMembro} />
        </Routes>
    )
}

export default AppRoutes;