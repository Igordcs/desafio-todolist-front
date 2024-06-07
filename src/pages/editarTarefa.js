import { useContext } from 'react';
import '../styles/EditarTarefa.css'
import {tarefaContext} from '../context/tarefaContext';

function EditarTarefa () {
    const {formData, handleInputChange, handleEditarSubmit} = useContext(tarefaContext)

    return (
        <div id="page-editarTarefa">
            <header id="page-header">
                <div>
                    <h1>Todolist</h1>
                </div>
            </header>
            <div className="centered">
                <div className='formWrapper'>
                    <form id='formCadastrarTarefa' onSubmit={handleEditarSubmit}>
                        <div>
                            <label>Nome</label>
                            <input 
                                type="text"
                                value={formData.nome}
                                onChange={(e) => handleInputChange("nome", e.target.value)}
                                minLength={5} 
                            />
                        </div>
                        <div>
                            <label>Descricao</label>
                            <textarea
                                value={formData.descricao}
                                onChange={(e) => handleInputChange("descricao", e.target.value)}
                                maxLength={140}
                            />
                        </div>
                        <div>
                            <label>Prioridade</label>
                            <select
                                value={formData.prioridade}
                                onChange={(e) => handleInputChange("prioridade", e.target.value)}
                            >
                                <option value={"ALTA"}>Alta</option>
                                <option value={"MEDIA"}>Média</option>
                                <option value={"BAIXA"}>Baixa</option>
                            </select>
                        </div>
                        <button className='confirmButton' type='submit'>Editar Tarefa</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditarTarefa;