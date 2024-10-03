import { RawCode } from 'codehike/code'

// extract meta from code block meta
export const meta = (code: RawCode) => {
  const [base, file] = code.meta.split('file:')

  return {
    base,
    file,
  }
}
