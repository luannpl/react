import Teste from './Teste';
import { PrimeReactProvider } from 'primereact/api';
import './App.css'



export default function App() {
    return (
        <PrimeReactProvider>
            <Teste/>
        </PrimeReactProvider>
    );
}
  
  

