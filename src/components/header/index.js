import { Link } from 'react-router-dom';
import './index.css'
import { FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { membroContext } from '../../context/membroContext';

function TodoListHeader() {
    const {handleLogout} = useContext(membroContext);

    return (
        <header id="page-header">
            <div>
                <Link to={"/"}>Todolist</Link>
                <FaSignOutAlt size={"32px"} onClick={handleLogout} />
            </div>
        </header>
    )
}

export default TodoListHeader;