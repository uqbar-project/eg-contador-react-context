import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import { Log } from './domain/log'



const getLabel = (componente) => componente.find('Label')
const getButtonPlus = (componente) => componente.find('[data-testid="button_plus"]').at(0)
const getButtonMinus = (componente) => componente.find('[data-testid="button_minus"]').at(0)
const getLog = (componente) => componente.find('LogRow')
const getDeleteLogButton = (componente, id) => componente.find(`[data-testid="button_deleteLog_${id}"]`).at(0)

it('el contador inicialmente está en 0', () => {
  const wrapperContador = mount(<App />)
  // console.log(wrapperContador.debug()) para ver por que tenemos 2 data-testid
  expect(getLabel(wrapperContador).text()).toBe('0')
})

describe('cuando el usuario presiona el botón -', () => {
  let wrapperContador
  beforeEach(() => {
    wrapperContador = mount(<App />)
    getButtonMinus(wrapperContador).simulate('click')
  })

  it('se agrega un log', () => {
    expect(wrapperContador.find('LogRow')).toHaveLength(1)
  })

  it('el contador pasa a estar en -1', () => {
    expect(getLabel(wrapperContador).text()).toBe('-1')
  })
})

describe('cuando el usuario presiona el botón +', () => {
  let wrapperContador
  beforeEach(() => {
    wrapperContador = mount(<App />)
    getButtonPlus(wrapperContador).simulate('click')
  })

  it('se agrega un log', () => {
    expect(wrapperContador.find('LogRow')).toHaveLength(1)
  })

  it('el contador pasa a estar en 1', () => {
    expect(getLabel(wrapperContador).text()).toBe('1')
  })
})

it('cuando el usuario presiona el botón Delete Log se elimina un log', () => {
  const wrapperContador = mount(<App />)
  const actualIndex = Log.getLastIndex()
  getButtonPlus(wrapperContador).simulate('click')
  expect(getLog(wrapperContador)).toHaveLength(1)
  getDeleteLogButton(wrapperContador, actualIndex).simulate('click')
  expect(getLog(wrapperContador)).toHaveLength(0)
})