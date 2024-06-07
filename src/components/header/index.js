import { Link } from 'react-router-dom';
import './index.css'

function TodoListHeader() {
    return (
        <header id="page-header">
            <div>
                <Link to={"/"}>Todolist</Link>
            </div>
        </header>
    )
}

export default TodoListHeader;