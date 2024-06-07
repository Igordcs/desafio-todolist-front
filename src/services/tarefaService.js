import api from './api';

async function pegarTarefas() {
    try {
        const {data} = await api.get('tarefa/');
        return data;
    } catch (error) {
        return error;
    }
}

async function editarTarefa(id, tarefa) {
    try {
        const {nome, descricao, prioridade, finalizada, dataTermino} = tarefa
        const {data} = await api.put(`tarefa/alterar/${id}`, {nome, descricao, prioridade, finalizada, dataTermino})
        return data
    } catch (error) {
        return error
    }
}

async function deletarTarefa(id) {
    try {
        const {data} = await api.delete(`tarefa/deletar/${id}`)
        return data
    } catch (error) {
        return error
    }
}

async function criarTarefa(membro_id, tarefa) {
    try {
        const {nome, descricao, prioridade, finalizada, dataTermino} = tarefa
        const {data} = await api.post(`tarefa/${membro_id}`, {nome, 
                                                             descricao, 
                                                             prioridade, 
                                                             finalizada, 
                                                             dataTermino
        })
        return data;
    } catch (error) {
        return error
    }
}

async function finalizarTarefa(tarefaId) {
    try {
        const {data} = await api.put(`tarefa/finalizar/${tarefaId}`)
        return data;
    } catch (error) {
        return error
    }
}

export default {pegarTarefas, editarTarefa, deletarTarefa, criarTarefa, finalizarTarefa};