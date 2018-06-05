export function zeroPad(value: number | string = '', len: number = 2): string {
  let str: string = value.toString()

  if (str.length < len) {
    str = ('0' + str.toString()).slice(-len)
  }

  return str
}
