import { compile, render } from '../src/mod'

/* eslint-disable no-template-curly-in-string */

test('compile hello world', () => {
  const source = 'hello ${world}!'
  const template = compile(source)
  expect(typeof template).toBe('function')
  const data = { world: 'earth' }
  const actualString = template(data)
  const expectedString = 'hello earth!'
  expect(actualString).toBe(expectedString)
})

test('compile out-of-order keys', () => {
  const source = '${one} ${two} ${three}!'
  const template = compile(source)
  expect(typeof template).toBe('function')
  const data = { two: 'b', three: 'c', one: 'a' }
  const actualString = template(data)
  const expectedString = 'a b c!'
  expect(actualString).toBe(expectedString)
})

test('render hello world', () => {
  const source = 'hello ${world}!'
  const data = { world: 'earth' }
  const actualString = render(source, data)
  const expectedString = 'hello earth!'
  expect(actualString).toBe(expectedString)
})

test('render out-of-order keys', () => {
  const source = '${one} ${two} ${three}!'
  const data = { two: 'b', three: 'c', one: 'a' }
  const actualString = render(source, data)
  const expectedString = 'a b c!'
  expect(actualString).toBe(expectedString)
})

test('render nested data', () => {
  const source = 'hello ${a.b.c}!'
  const data = { a: { b: { c: 'earth' } } }
  const actualString = render(source, data)
  const expectedString = 'hello earth!'
  expect(actualString).toBe(expectedString)
})

test('render array map', () => {
  const source = 'hello ${names.join(", ")}!'
  const data = { names: ['alice', 'bob'] }
  const actualString = render(source, data)
  const expectedString = 'hello alice, bob!'
  expect(actualString).toBe(expectedString)
})

test('render nested template', () => {
  const source = 'hello ${names.map(name => `${name} friend`).join(", ")}!'
  const data = { names: ['alice', 'bob'] }
  const actualString = render(source, data)
  const expectedString = 'hello alice friend, bob friend!'
  expect(actualString).toBe(expectedString)
})
