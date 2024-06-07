import React, {useState, useContext} from 'react';
import tarefaService from '../services/tarefaService'

const tarefaContext = React.createContext()

const TarefaProvider = ({children}) => {
    const [tarefaSelecionada, setTarefaSelecionada] = useState(null)
    const [tarefas, setTarefas] = useState([])
    const [carregando, setCarregando] = useState(false)

    async function getTarefas() {
        setCarregando(true);
        const data = await tarefaService.pegarTarefas()
        setTarefas(data);
        setCarregando(false);
    }

    function handleSelecionarTarefa(tarefa) {
        setTarefaSelecionada(tarefa)
    }

    console.log(tarefaSelecionada)

    return (
        <tarefaContext.Provider
            value={{tarefas, carregando, tarefaSelecionada, handleSelecionarTarefa, getTarefas}}    
        >
            {children}
        </tarefaContext.Provider>
    )
}

export {tarefaContext, TarefaProvider};
