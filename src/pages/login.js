import { useContext } from 'react';
import '../styles/login.css'
import { membroContext } from '../context/membroContext';

function LoginMembro () {
    const {email, handleEmail, handleLoginSubmit} = useContext(membroContext);
    return (
        <div id="page-loginMembro">
            <div className='mainFrame'>
                <div className='formBlock'>
                    <h2>Faça login</h2>
                    <p>Preencha o campo de email.</p>
                    <main>
                        <form id='loginMembroForm' onSubmit={handleLoginSubmit}>    
                            <div>
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    value={email} 
                                    onChange={(e) => handleEmail(e.target.value)}
                                />
                            </div>
                            <button type='submit' className='confirmButton'>Fazer login</button>
                        </form>
                    </main>
                </div>
            </div>
            <div className='heroImg'>
                <h1>Todolist</h1>
            </div>
        </div>
    )
}

export default LoginMembro;