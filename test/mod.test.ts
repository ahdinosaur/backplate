import { compile, render } from '../src/mod'

/* eslint-disable no-template-curly-in-string */

test('compile hello world', () => {
  const source = 'hello ${world}!'
  const keys = ['world']
  const template = compile({ source, keys })
  expect(typeof template).toBe('function')
  const data = { world: 'earth' }
  const actualString = template(data)
  const expectedString = 'hello earth!'
  expect(actualString).toBe(expectedString)
})

test('render hello world', () => {
  const source = 'hello ${world}!'
  const data = { world: 'earth' }
  const actualString = render({ source, data })
  const expectedString = 'hello earth!'
  expect(actualString).toBe(expectedString)
})
