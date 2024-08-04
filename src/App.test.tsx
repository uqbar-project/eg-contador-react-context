import App from './App'
import { expect, test, describe } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Log } from './domain/log'

// https://www.polvara.me/posts/mocking-context-with-react-testing-library/

describe('tests del contador', () => {

  test('el contador inicialmente está en 0', () => {
    render(
      <App />
  )
    expect(screen.getByTestId('contador').textContent).toBe('0')
  })
  
  test('si se presiona el botón +, se agrega un log', () => {
    render(
      <App />
  )
    fireEvent
    .click(screen.getByTestId('button_plus'))
    expect(screen.getAllByTestId('LogRow')).toHaveLength(1)
  })
  
  test('si se presiona el botón +, el contador pasa a estar en 1', () => {
    render(
      <App />
    )
    fireEvent.click(screen.getByTestId('button_plus'))
    expect(screen.getByTestId('contador').textContent).toBe('1')
  })
  
  test('si se presiona el botón -, se agrega un log', () => {
    render(
        <App />
    )
    fireEvent.click(screen.getByTestId('button_minus'))
    expect(screen.getAllByTestId('LogRow')).toHaveLength(1)
  })
  
  test('si se presiona el botón -, el contador pasa a estar en -1', () => {
    render(
      <App />
    )
    fireEvent.click(screen.getByTestId('button_minus'))
    expect(screen.getByTestId('contador').textContent).toBe('-1')
  })
  
  
  test('cuando el usuario presiona el botón Delete Log se elimina un log', () => {
    render(
      <App />
    )
    const actualIndex = Log.getLastIndex()
    fireEvent.click(screen.getByTestId('button_plus'))
    expect(screen.queryAllByTestId('LogRow')).toHaveLength(1)
    fireEvent.click(screen.getByTestId('button_deleteLog_' + actualIndex))
    expect(screen.queryAllByTestId('LogRow')).toHaveLength(0)
  })

})

