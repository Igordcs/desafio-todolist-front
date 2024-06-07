
import { useEffect } from 'react';  
import api from './services/api';
import AppRoutes from './AppRoutes';
import { MembroProvider } from './context/membroContext';
import { TarefaProvider } from './context/tarefaContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  useEffect(() => {
    api.get('tarefa/').then((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <BrowserRouter>
      <MembroProvider>
        <TarefaProvider>
          <AppRoutes/>
        </TarefaProvider>
      </MembroProvider>
    </BrowserRouter>
  )

}

export default App;
