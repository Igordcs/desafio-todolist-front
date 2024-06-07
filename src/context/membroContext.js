import React, {useState, useContext} from 'react';
import membroService from '../services/membroService'

const membroContext = React.createContext()

const MembroProvider = ({children}) => {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");

    async function handleCadastrarSubmit(e) {
        e.preventDefault()

        const res = await membroService.cadastrarMembro(nome, email);
        console.log(res);
    }

    function handleEmail(text) {
        setEmail(text);
    }

    function handleNome(text) {
        setNome(text);
    }

    return (
        <membroContext.Provider
            value={{email, nome, handleEmail, handleNome, handleCadastrarSubmit}}    
        >
            {children}
        </membroContext.Provider>
    )
}

export {membroContext, MembroProvider};
