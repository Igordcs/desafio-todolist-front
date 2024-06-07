import api from './api';

async function pegarTarefas() {
    try {
        const {data} = await api.get('tarefa/');
        return data;
    } catch (error) {
        return error;
    }
}

export default {pegarTarefas};