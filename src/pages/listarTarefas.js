import { useContext, useEffect } from "react";
import { FaPlus, FaSearch, FaStopwatch} from "react-icons/fa";

import '../styles/ListarTarefas.css'
import Tarefa from "../components/tarefa";
import {tarefaContext} from '../context/tarefaContext';
import { Link } from "react-router-dom";

function ListarTarefas () {
    const {carregando, tarefas, getTarefas} = useContext(tarefaContext)

    useEffect(() => {
        getTarefas();
    }, [])
    
    return (
        <div id="page-listarTarefas">
            <header id="page-header">
                <div>
                    <h1>Todolist</h1>
                </div>
            </header>
            <div className="centered">
                <main className="listContainer">
                    <div className="tarefaListHeader">
                        <h2>Lista de tarefas</h2>
                        <Link to={"/cadastrarTarefa"}>
                            <FaPlus color="#fff" size={"16px"} /> 
                        </Link>
                    </div>
                    <div className="tarefaContainer">
                        {carregando && <p>Carregando</p>}
                        {!carregando && tarefas.map((tarefa) => <Tarefa tarefa={tarefa}/>)}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ListarTarefas;