# backplate

> backtick (\`) templates

[tiny](./src/mod.ts) template engine using JavaScript's built-in [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

**NOTE: this is _probably_ NOT SAFE FOR UNTRUSTED INPUT**

## import

### node

install with

```shell
npm install backplate
```

or

```shell
yarn add backplate
```

and import with

```js
const { compile, render } = require('backplate')
```

or

```js
import { compile, render } from 'backplate'
```

### deno

```js
import { compile, render } from 'https://denopkg.com/ahdinosaur/backplate@main/src/mod.ts'
```

## usage

### `template = compile({ source, keys })`

```js
const source = 'Hello ${world}!'
const keys = ['world']

const template = compile({ source, keys })

const data = { world: 'Earth' }
const string = template(data)

console.log(string)
// Hello Earth!
```

### `render({ source, data })`

```js
const source = 'Hello ${world}!'
const data = { world: 'Earth' }

const string = render({ source, data })

console.log(string)
// Hello Earth!
```
