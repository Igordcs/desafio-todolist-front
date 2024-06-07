import React, {useState, useContext} from 'react';
import tarefaService from '../services/tarefaService'
import {membroContext} from './membroContext';
import { useNavigate } from 'react-router-dom';

const tarefaContext = React.createContext()

const TarefaProvider = ({children}) => {
    const {membroLogado} = useContext(membroContext) 
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
    const navigate = useNavigate()

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
        ...prevData,
        [field]: value
        }));
    };

    const resetFormData = () => {
        setFormData({
            id: null,
            nome: '',
            descricao: '',
            finalizada: false,
            prioridade: 'BAIXA',
            dataTermino: null
        })
    }
    async function getTarefas() {
        setCarregando(true);
        const data = await tarefaService.pegarTarefas()
        setTarefas(data);
        setCarregando(false);
    }

    async function handleDeletarTarefa(id) {
        const data = await tarefaService.deletarTarefa(id);

        if (data.error)
            return alert(data.error);

        setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
        
        return data;
    }

    async function handleFinalizarTarefa(id) {
        const data = await tarefaService.finalizarTarefa(id);

        if (data.error)
            return alert(data.error);

        setTarefas((prevTarefas) =>
            prevTarefas.map((tarefa) =>
                tarefa.id === id ? { ...tarefa, finalizada: true } : tarefa
            )
        );

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

    async function handleEditarSubmit(e) {
        e.preventDefault()
        const data = await tarefaService.editarTarefa(formData.id, formData)

        if (data.error)
            return alert(data.error);

        navigate("/listarTarefas")
        resetFormData();
        return data;
    }

    async function handleCriarSubmit(e) {
        e.preventDefault()
        const data = await tarefaService.criarTarefa(membroLogado.id, formData)

        if (data.error)
            return alert(data.error)

        navigate("/listarTarefas")
        resetFormData();
        return data;
    }


    return (
        <tarefaContext.Provider
            value={{tarefas, 
                    carregando, 
                    formData, 
                    handleEditarSubmit, 
                    handleFinalizarTarefa,
                    handleCriarSubmit,
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
