import React, { createContext,useState } from 'react'

import { Log } from '../domain/log'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState([])

  const addLog = (action) => {
    // También podemos hacer
    // const newLogs = [...logs]
    // newLogs.push(new Log(action))
    // lo importante es generar una copia

    const newLogs = logs.concat(new Log(action))
    setLogs(newLogs)
  }

  const value = {
    // Publicamos el estado
    count,
    logs,
    // Funciones que afectan al estado
    decrement: () => {
      addLog('DECREMENT')
      setCount(count - 1)
    },
    increment: () => {
      addLog('INCREMENT')
      setCount(count + 1)
    },
    deleteLog: (logToDelete) => {
      // fíjense que el context está tomando una responsabilidad
      const newLogs = logs.filter((log) => logToDelete.id !== log.id)
      setLogs(newLogs)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}