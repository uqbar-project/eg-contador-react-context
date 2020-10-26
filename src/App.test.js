import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import App from './App'
import { Provider } from './context/Context'
import { Log } from './domain/log'

// https://www.polvara.me/posts/mocking-context-with-react-testing-library/

test('el contador inicialmente está en 0', () => {
  const { getByTestId } = render(
    <Provider>
      <App />
    </Provider>
  )
  expect(getByTestId('contador')).toHaveTextContent('0')
})

test('si se presiona el botón +, se agrega un log', () => {
  const { getByTestId, getAllByTestId } = render(
    <Provider>
      <App />
    </Provider>
  )
  fireEvent.click(getByTestId('button_plus'))
  expect(getAllByTestId('LogRow')).toHaveLength(1)
})

test('si se presiona el botón +, el contador pasa a estar en 1', () => {
  const { getByTestId } = render(
    <Provider>
      <App />
    </Provider>
  )
  fireEvent.click(getByTestId('button_plus'))
  expect(getByTestId('contador')).toHaveTextContent('1')
})

test('si se presiona el botón -, se agrega un log', () => {
  const { getByTestId, getAllByTestId } = render(
    <Provider>
      <App />
    </Provider>
  )
  fireEvent.click(getByTestId('button_minus'))
  expect(getAllByTestId('LogRow')).toHaveLength(1)
})

test('si se presiona el botón -, el contador pasa a estar en -1', () => {
  const { getByTestId } = render(
    <Provider>
      <App />
    </Provider>
  )
  fireEvent.click(getByTestId('button_minus'))
  expect(getByTestId('contador')).toHaveTextContent('-1')
})


test('cuando el usuario presiona el botón Delete Log se elimina un log', () => {
  const { queryAllByTestId, getByTestId } = render(
    <Provider>
      <App />
    </Provider>
  )
  const actualIndex = Log.getLastIndex()
  fireEvent.click(getByTestId('button_plus'))
  expect(queryAllByTestId('LogRow')).toHaveLength(1)
  fireEvent.click(getByTestId('button_deleteLog_' + actualIndex))
  expect(queryAllByTestId('LogRow')).toHaveLength(0)
})
