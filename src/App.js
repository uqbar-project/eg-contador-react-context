import './App.css'
import 'semantic-ui-css/semantic.min.css'

import React from 'react'

import Contador from './components/contador'
import LogContador from './components/logContador'
import { Provider } from './context/Context'

const App = () => (
  <Provider >
    <Contador />
    <LogContador />
  </Provider>
)

export default App
