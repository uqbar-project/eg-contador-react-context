import { createContext } from 'react'

import type { Log } from '../domain/log'

export type LogContext = {
  count: number
  logs: Log[]
  decrement: () => void
  increment: () => void
  deleteLog: (log: Log) => void
}

export const Context = createContext<LogContext | null>(null)
