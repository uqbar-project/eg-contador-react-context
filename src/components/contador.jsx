import { useContext } from 'react'
import { Button, Container, Label } from 'semantic-ui-react'

import { Context } from '../context/Context'

const color = (valor) => {
  if (valor === 0) return 'grey'
  return valor > 0 ? 'green' : 'red'
}

const Contador = () => {
  const { count, decrement, increment } = useContext(Context)
  // para usarlo en un componente como clase, se puede ver 
  // https://medium.com/noders/manejo-de-estado-con-context-y-hooks-en-react-7adfc7a740a3

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