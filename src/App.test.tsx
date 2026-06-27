import { fireEvent, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import App from './App'
import { Log } from './domain/log'

// https://www.polvara.me/posts/mocking-context-with-react-testing-library/

describe('tests del contador', () => {
  test('el contador inicialmente está en 0', () => {
    render(<App />)
    expect(screen.getByTestId('contador').textContent).toBe('0')
  })

  test('si se presiona el botón +, se agrega un log', async () => {
    render(<App />)
    await userEvent.click(screen.getByTestId('button_plus'))
    expect(screen.getByTestId('contador').innerHTML).toBe('1')
  })

  test('si se presiona el botón +, el contador suma 1', async () => {
    render(<App />)
    await userEvent.click(screen.getByTestId('button_plus'))
    await userEvent.click(screen.getByTestId('button_plus'))
    await userEvent.click(screen.getByTestId('button_plus'))
    expect(screen.getAllByTestId('LogRow').length).toBe(3)
  })

  test('cuando el usuario presiona el botón Delete Log se elimina un log', () => {
    render(<App />)
    const actualIndex = Log.getLastIndex()
    fireEvent.click(screen.getByTestId('button_plus'))
    expect(screen.queryAllByTestId('LogRow')).toHaveLength(1)
    fireEvent.click(screen.getByTestId(`button_deleteLog_${actualIndex}`))
    expect(screen.queryAllByTestId('LogRow')).toHaveLength(0)
  })
})
