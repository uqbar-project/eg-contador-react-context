import './contador.css'

import { useContext } from 'react'

import { Context } from '../context/Context'

const Contador = () => {
  const { count, decrement, increment } = useContext(Context)!

  // para usarlo en un componente como clase, se puede ver 
  // https://medium.com/noders/manejo-de-estado-con-context-y-hooks-en-react-7adfc7a740a3

  return (
    <div className="container">
      <h2>
        Contador
      </h2>
      <div className="contador">
        <button data-testid="button_minus" className="secondary" onClick={decrement}>-</button>
        <label data-testid="contador">{count}</label>
        <button data-testid="button_plus" className="primary" onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Contador