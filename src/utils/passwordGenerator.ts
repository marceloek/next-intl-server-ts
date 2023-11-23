type IRulesNames = 'lowercase' | 'uppercase' | 'numbers' | 'symbols'

interface IOptionsPasswordGenerator {
  length?: number
  rules?: Partial<Record<IRulesNames, boolean>>
  strict?: boolean
}

function passwordGenerator({
  length = 10,
  rules = { lowercase: true, uppercase: true, numbers: true, symbols: true },
  strict = true,
}: IOptionsPasswordGenerator = {}): string {
  const charsets: Record<IRulesNames, RegExp> = {
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    numbers: /[0-9]/,
    symbols: /[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]/,
  }

  console.log(length, rules, strict, charsets)

  const password = 'a-zA-Z0-9'

  return password
}

function passwordValidator(): boolean {
  return true
}

export { passwordGenerator, passwordValidator }
