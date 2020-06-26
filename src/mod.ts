/* public types */

export type Source = string
export type Data = object
export type Template = (data: Data) => string

/* public functions */

export function compile(source: Source): Template {
  // eslint-disable-next-line no-new-func
  return new Function(
    'with (arguments[0]) { return `' + source + '`; }',
  ) as Template
}

export function render(source: Source, data: Data): string {
  return compile(source)(data)
}
