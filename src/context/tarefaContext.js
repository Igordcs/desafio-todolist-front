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

    async function handleEditarSubmit(e) {
        e.preventDefault()
        if (!membroLogado)
            return alert("Você precisa estar logado para editar!")
        const resp = await tarefaService.editarTarefa(formData.id, formData)
        navigate("/listarTarefas")
        return resp;
    }

    async function handleCriarSubmit(e) {
        e.preventDefault()
        if (!membroLogado)
            return alert("Você precisa estar logado para criar!")
        const resp = await tarefaService.criarTarefa(membroLogado.id, formData)
        navigate("/listarTarefas")
        return resp;
    }


    return (
        <tarefaContext.Provider
            value={{tarefas, 
                    carregando, 
                    formData, 
                    handleEditarSubmit, 
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
