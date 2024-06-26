import {FaEdit, FaTrashAlt, FaStopwatch, FaCheck} from "react-icons/fa";

import './index.css'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { tarefaContext } from "../../context/tarefaContext";
import { membroContext } from "../../context/membroContext";

function Tarefa({tarefa}) {
    const {membroLogado} = useContext(membroContext)
    const {handleSelecionarTarefa, handleDeletarTarefa, handleFinalizarTarefa} = useContext(tarefaContext);
    const [isDescricaoVisivel, setisDescricaoVisivel] = useState(false);

    function handleDescricaoVisivel(e) {
        e.preventDefault()
        setisDescricaoVisivel(!isDescricaoVisivel)
    }

    const colors = {
        ALTA: "#E83F5B",
        MEDIA: "#cbd633",
        BAIXA: "#000"
    }
    
    return (
        <button className="tarefaWrapper" onClick={handleDescricaoVisivel}>
            <div className="tarefaBasicInfo">
                <div className="tarefaTitleWrapper">
                    <h3>{tarefa.nome}</h3>
                </div>
                <div className="prioridadeWrapper">
                    <h4 style={{color: colors[tarefa.prioridade]}}>{tarefa.prioridade}</h4>
                    <FaStopwatch color={colors[tarefa.prioridade]} />
                </div>
                <div>
                    <p>{tarefa.finalizada ? "Finalizada" : "A fazer"}</p>
                </div>
            </div>
            {isDescricaoVisivel && (
                <div className="tarefaMoreAction">
                    <div className="tarefaDescricao">
                        <h3>Descrição: </h3>
                        <p>{tarefa.descricao}</p>
                    </div>
                    <div className="tarefaActions">
                        <button 
                            className="buttonFinalizar"
                            onClick={() => handleFinalizarTarefa(tarefa.id)}
                        >
                            Finalizar
                            <FaCheck size={"12px"} color="#fff" />
                        </button>
                        {tarefa.criador.id === membroLogado.id && (
                            <Link 
                                to="/editarTarefa" 
                                className="buttonEditar" 
                                onClick={() => handleSelecionarTarefa(tarefa)}>
                                Editar 
                                <FaEdit size={"12px"} color="#fff" />
                            </Link>
                        )}
                        {tarefa.criador.id === membroLogado.id && (
                            <button 
                                className="buttonExcluir"
                                onClick={() => handleDeletarTarefa(tarefa.id)}
                            >
                                Excluir 
                                <FaTrashAlt size={"12px"} color="#fff" />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </button>
    )
}

export default Tarefa;