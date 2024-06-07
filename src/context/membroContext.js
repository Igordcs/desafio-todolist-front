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

        const data = await membroService.cadastrarMembro(nome, email);

        if (data.error)
            return alert(data.error);

        setMembroLogado(data);
        navigate("/");
        console.log(data);
    }

    async function handleLoginSubmit(e) {
        e.preventDefault();

        const data = await membroService.loginMembro(email);

        if (data.error)
            return alert(data.error);
        
        setMembroLogado(data);
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
