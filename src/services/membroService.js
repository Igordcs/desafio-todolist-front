import api from './api';

async function loginMembro(email) {
    try {
        const {data} = await api.get(`login?=email${email}`)
        return data;
    } catch (error) {
        return error;
    }
}

async function cadastrarMembro(nome, email) {
    try {
        const {data} = await api.post('membro/', {nome, email});
        return data;
    } catch (error) {
        return error;
    }
}

export default {cadastrarMembro, loginMembro};