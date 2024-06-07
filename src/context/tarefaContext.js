import React, {useState, useContext} from 'react';
import tarefaService from '../services/tarefaService'

const tarefaContext = React.createContext()

const TarefaProvider = ({children}) => {
    const [tarefas, setTarefas] = useState([])
    const [carregando, setCarregando] = useState(false)
    const [formData, setFormData] = useState({
        id: null,
        nome: '',
        descricao: '',
        finalizada: false,
        prioridade: 'BAIXA',
        dataTermino: null
    });

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
        ...prevData,
        [field]: value
        }));
    };

    async function getTarefas() {
        setCarregando(true);
        const data = await tarefaService.pegarTarefas()
        setTarefas(data);
        setCarregando(false);
    }

    async function handleDeletarTarefa(id) {
        const data = await tarefaService.deletarTarefa(id);
        return data;
    }

    function handleSelecionarTarefa(tarefa) {
        handleInputChange("id", tarefa.id)
        handleInputChange("nome", tarefa.nome)
        handleInputChange("descricao", tarefa.descricao)
        handleInputChange("dataTermino", tarefa.dataTermino)
        handleInputChange("prioridade", tarefa.prioridade)
        handleInputChange("finalizada", tarefa.finalizada)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const resp = await tarefaService.editarTarefa(formData.id, formData)
        return resp;
    }


    return (
        <tarefaContext.Provider
            value={{tarefas, 
                    carregando, 
                    formData, 
                    handleSubmit, 
                    handleSelecionarTarefa, 
                    handleInputChange, 
                    handleDeletarTarefa,
                    getTarefas
                   }}    
        >
            {children}
        </tarefaContext.Provider>
    )
}

export {tarefaContext, TarefaProvider};
