/* public types */

export type Source = string

export interface Data {
  [key: string]: string
}
export type DataKeys = Array<keyof Data>

/* public functions */

export interface CompileOptions {
  source: Source
  keys: DataKeys
}

export function compile(options: CompileOptions) {
  const { source, keys } = options
  const renderer = createRenderer(source, keys)
  return function template(data: Data) {
    const values = pick(data, keys)
    return renderer(...values)
  }
}

export interface RenderOptions {
  source: Source
  data: Data
}

export function render(options: RenderOptions) {
  const { source, data } = options
  const keys = Object.keys(data)
  const values = pick(data, keys)
  const renderer = createRenderer(source, keys)
  return renderer(...values)
}

/* private functions */

function createRenderer(source: Source, keys: DataKeys) {
  const args = keys.join(', ')
  // eslint-disable-next-line no-new-func
  return new Function(args, 'return `' + source + '`;')
}

function pick(data: Data, keys: DataKeys) {
  let values: Array<Data[keyof Data]> = []
  keys.forEach(key => {
    values.push(data[key])
  })
  return values
}
