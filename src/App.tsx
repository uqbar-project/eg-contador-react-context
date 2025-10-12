import './App.css'
import Contador from './components/contador'
import LogContador from './components/logContador'
import { Provider } from './context/Provider'

const App = () => 
  <Provider >
    <Contador />
    <LogContador />
  </Provider>


export default App