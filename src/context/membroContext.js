import React, {useState, useContext} from 'react';
import membroService from '../services/membroService'
import { useNavigate } from 'react-router-dom';

const membroContext = React.createContext()

const MembroProvider = ({children}) => {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [membroLogado, setMembroLogado] = useState(null);
    const navigate = useNavigate()

    async function handleCadastrarSubmit(e) {
        e.preventDefault()

        const res = await membroService.cadastrarMembro(nome, email);
        setMembroLogado(res);
        navigate("/");
        console.log(res);
    }

    async function handleLoginSubmit(e) {
        e.preventDefault();

        const res = await membroService.loginMembro(email);
        setMembroLogado(res);
        navigate("/");
    }

    function handleEmail(text) {
        setEmail(text);
    }

    function handleNome(text) {
        setNome(text);
    }

    return (
        <membroContext.Provider
            value={{email, 
                    nome, 
                    membroLogado, 
                    handleLoginSubmit, 
                    handleEmail, 
                    handleNome, 
                    handleCadastrarSubmit
                }}    
        >
            {children}
        </membroContext.Provider>
    )
}

export {membroContext, MembroProvider};
