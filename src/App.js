
import { useEffect } from 'react';  
import api from './services/api';
import AppRoutes from './AppRoutes';
import { MembroProvider } from './context/membroContext';

function App() {
  useEffect(() => {
    api.get('tarefa/').then((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <MembroProvider>
      <AppRoutes/>
    </MembroProvider>
  )

}

export default App;
