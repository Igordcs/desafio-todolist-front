import api from './api';

async function cadastrarMembro(nome, email) {
    try {
        const {data} = await api.post('membro/', {nome, email});
        return data;
    } catch (error) {
        return error;
    }
}

export default {cadastrarMembro};