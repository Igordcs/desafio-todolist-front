
import { useEffect } from 'react';  
import api from './services/api';
import AppRoutes from './AppRoutes';
import { MembroProvider } from './context/membroContext';
import { TarefaProvider } from './context/tarefaContext';

function App() {
  useEffect(() => {
    api.get('tarefa/').then((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <MembroProvider>
      <TarefaProvider>
        <AppRoutes/>
      </TarefaProvider>
    </MembroProvider>
  )

}

export default App;
