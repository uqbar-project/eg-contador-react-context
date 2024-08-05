import './logContador.css'

import { useContext } from 'react'

import { Context } from '../context/Context'
import { Log } from 'src/domain/log'

const LogContador = () => {
  const { logs } = useContext(Context)!
  return (
    <div className="logContainer">
      <div>
        <h3>
          Log de acciones
        </h3>
      </div>
      <div className="table">
        <div className="header">
          <div>Cuándo</div>
          <div>Acción</div>
          <div></div>
        </div>
        {logs.map((log) => <Logdiv log={log} key={log.id} />)}
      </div>
    </div>
  )
}
export default LogContador

const Logdiv = ({ log }: { log: Log }) => {
  const { deleteLog } = useContext(Context)!

  return <>
    <div className="body">
      <div>{log.when.toLocaleString('es-AR')}</div>
      <div data-testid="LogRow">{log.action}</div>
      <div>
        <img src="./src/assets/delete.png" data-testid={`button_deleteLog_${log.id}`} onClick={() => deleteLog(log)} className="delete" title="Eliminar log"/>
      </div>
    </div>
    <hr/>
  </>
}
