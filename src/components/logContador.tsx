import { useContext } from 'react'
import './logContador.css'

import { Context } from '../context/Context'
import type { Log } from '../domain/log'

const LogContador = () => {
  const context = useContext(Context)
  if (!context) {
    return null
  }
  const { logs } = context
  return (
    <div className="logContainer">
      <div>
        <h3>Log de acciones</h3>
      </div>
      <table className="table">
        <thead>
          <tr className="header">
            <th scope="col">Cuándo</th>
            <th scope="col">Acción</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <Logdiv log={log} key={log.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default LogContador

const Logdiv = ({ log }: { log: Log }) => {
  const context = useContext(Context)
  if (!context) {
    return null
  }
  const { deleteLog } = context

  return (
    <tr className="body">
      <td>{log.when.toLocaleString('es-AR')}</td>
      <td data-testid="LogRow">{log.action}</td>
      <td>
        <button
          type="button"
          data-testid={`button_deleteLog_${log.id}`}
          onClick={() => deleteLog(log)}
          className="delete"
          title="Eliminar log"
        >
          <img src="./src/assets/delete.png" alt="Eliminar log" />
        </button>
      </td>
    </tr>
  )
}
