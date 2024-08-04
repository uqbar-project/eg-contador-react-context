import { createContext,ReactNode,useState } from 'react'

import { ActionLog, Log } from '../domain/log'

export type LogContext = {
  count: number,
  logs: Log[],
  decrement: () => void,
  increment: () => void,
  deleteLog: (log: Log) => void,
}

export const Context = createContext<LogContext | null>(null)

export const Provider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState<Log[]>([])

  const addLog = (action: ActionLog) => {
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
      addLog(ActionLog.DECREMENT)
      setCount(count - 1)
    },
    increment: () => {
      addLog(ActionLog.INCREMENT)
      setCount(count + 1)
    },
    deleteLog: (logToDelete: Log) => {
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
