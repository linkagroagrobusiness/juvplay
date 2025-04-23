import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from './Rotas';
import './assets/css/radionovela.css';
import AppProvider from './providores/AppProvidor';

function App() {
  return (
    <AppProvider>
     <Rotas />
    </AppProvider>
  );
}

export default App;
