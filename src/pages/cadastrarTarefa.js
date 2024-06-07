import { useContext } from "react";
import { tarefaContext } from "../context/tarefaContext";
import { Link } from "react-router-dom";

function CadastrarTarefa () {
    const {formData, handleInputChange, handleCriarSubmit} = useContext(tarefaContext)

    return (
        <div id="page-editarTarefa">
            <header id="page-header">
                <div>
                    <Link to={"/"}>Todolist</Link>
                </div>
            </header>
            <div className="centered">
                <div className='formWrapper'>
                    <form id='formCadastrarTarefa' onSubmit={handleCriarSubmit}>
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
                        <button className='confirmButton' type='submit'>Criar Tarefa</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CadastrarTarefa;