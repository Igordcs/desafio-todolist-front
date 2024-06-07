import { useContext } from 'react';
import '../styles/CadastrarMembro.css'
import { membroContext } from '../context/membroContext';
import { Link } from 'react-router-dom';

function CadastrarMembro () {
    const {nome, email, handleNome, handleEmail, handleCadastrarSubmit} = useContext(membroContext);
    return (
        <div id="page-cadastrarMembro">
            <div className='mainFrame'>
                <div className='formBlock'>
                    <h2>Cadastre-se</h2>
                    <p>Preencha os campos as informações necessárias.</p>
                    <main>
                        <form id='cadastrarMembroForm' onSubmit={handleCadastrarSubmit}>
                            <div>
                                <label>Nome</label>
                                <input 
                                    type="text" 
                                    minLength={5} 
                                    value={nome} 
                                    onChange={(e) => handleNome(e.target.value)} 
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    value={email} 
                                    onChange={(e) => handleEmail(e.target.value)}
                                />
                            </div>
                            <button type='submit' className='confirmButton'>Cadastrar-se</button>
                        </form>
                    </main>
                    <div className='submitInfo'>
                        <p>Já possui uma conta?</p>
                        <Link to="/login" >Faça login</Link>
                    </div>
                </div>
            </div>
            <div className='heroImg'>
                <h1>Todolist</h1>
            </div>
        </div>
    )
}

export default CadastrarMembro;