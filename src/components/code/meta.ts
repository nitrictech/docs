import { RawCode } from 'codehike/code'

// extract meta from code block meta
export const meta = (code: RawCode) => {
  const [base, file] = code.meta.trim().split('file:')

  return {
    base: base.trim(),
    file: file ? file.trim() : null,
  }
}
