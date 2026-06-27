import './contador.css'

import { useContext } from 'react'

import { Context } from '../context/Context'

const Contador = () => {
  const context = useContext(Context)
  if (!context) {
    return null
  }
  const { count, increment, decrement } = context

  return (
    <div className="container">
      <h2>Contador</h2>
      <div className="contador">
        <button
          type="button"
          data-testid="button_minus"
          className="secondary"
          onClick={decrement}
          title="Restar uno"
        >
          -
        </button>
        <span data-testid="contador">{count}</span>
        <button
          type="button"
          data-testid="button_plus"
          className="primary"
          onClick={increment}
          title="Sumar uno"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Contador
