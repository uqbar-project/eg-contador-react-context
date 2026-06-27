import type { ReactNode } from 'react'
import { useState } from 'react'
import { ActionLog, Log } from '../domain/log'
import { Context } from './Context'

export const Provider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState<Log[]>([])

  const increment = () => {
    setCount(count + 1)
    setLogs(logs.concat(new Log(ActionLog.INCREMENT)))
  }

  const decrement = () => {
    setCount(count - 1)
    setLogs(logs.concat(new Log(ActionLog.DECREMENT)))
  }

  const deleteLog = (logToDelete: Log) => {
    setLogs(logs.filter((log) => log.id !== logToDelete.id))
  }

  const value = {
    count,
    increment,
    decrement,
    logs,
    deleteLog,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
