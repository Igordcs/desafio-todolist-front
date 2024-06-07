import { useContext, useEffect } from "react";
import { FaSearch, FaStopwatch} from "react-icons/fa";

import '../styles/ListarTarefas.css'
import Tarefa from "../components/tarefa";
import {tarefaContext} from '../context/tarefaContext';

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
                    <h2>Lista de tarefas</h2>
                    <div className="searchContainer">
                        <div>
                            <input type="Text" placeholder="Procure uma tarefa"/>
                            <FaSearch color='#000' size={"24px"} />
                        </div>
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