
import { useEffect } from 'react';  
import api from './services/api';
import AppRoutes from './AppRoutes';

function App() {
  useEffect(() => {
    api.get('tarefa/').then((response) => {
      console.log(response.data)
    })
  }, [])

  return <AppRoutes/>
}

export default App;
