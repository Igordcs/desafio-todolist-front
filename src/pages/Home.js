import {Link} from 'react-router-dom'

import '../styles/Home.css'

function Home () {
    return (
        <div id="page-home">
            <div className='mainFrame'>
                <Link to={"/listarTarefas"}>Listagem de tarefas</Link>
                <Link to={"/cadastrarMembro"}>Cadastrar Membro</Link>
            </div>
            <div className='heroImg'>
                <h1>Todolist</h1>
            </div>
        </div>
    )
}

export default Home;