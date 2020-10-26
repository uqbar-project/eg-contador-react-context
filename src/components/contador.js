import React, { useContext } from 'react'
import { Button, Container, Label } from 'semantic-ui-react'

import { Context } from '../context/Context'

const color = (valor) => {
  if (valor === 0) return 'gray'
  return valor > 0 ? 'green' : 'red'
}

const Contador = () => {
  const { count, decrement, increment } = useContext(Context)

  return (
    <Container textAlign="center">
      <div>
        <h2>
          Contador
        </h2>
      </div>
      <div>
        <Button primary data-testid="button_minus" onClick={decrement}>-</Button>
        <Label data-testid="contador" circular color={color(count)} size="huge">{count}</Label>
        <Button secondary data-testid="button_plus" onClick={increment}>+</Button>
      </div>
    </Container>
  )
}

export default Contador