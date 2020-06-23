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
    const values = Object.values(data)
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
  const values = Object.values(data)
  const renderer = createRenderer(source, keys)
  return renderer(...values)
}

/* private functions */

function createRenderer(source: Source, keys: DataKeys) {
  const args = keys.join(', ')
  // eslint-disable-next-line no-new-func
  return new Function(args, 'return `' + source + '`;')
}
