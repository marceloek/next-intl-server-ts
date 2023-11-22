import tailwindcssForms from '@tailwindcss/forms'
import daisyui from 'daisyui'

import type { Config } from 'tailwindcss'

const maxGridColSpan = 24

const arrayGridColSpan = Array.from<undefined>({
  length: maxGridColSpan - 12,
}).map((_, index) => index + 13)

const gridTemplateColumns = arrayGridColSpan.reduce(
  (acc, key) => {
    return { ...acc, [key]: `repeat(${key}, minmax(0, 1fr))` }
  },
  {} as Record<string, string>,
)

const gridColumn = arrayGridColSpan.reduce(
  (acc, key) => {
    return { ...acc, [`span-${key}`]: `span ${key} / span ${key}` }
  },
  {} as Record<string, string>,
)

const gridColumnPattern = arrayGridColSpan.join('|')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ubuntu)'],
        mono: ['var(--font-firacode-mono)'],
      },
      height: {
        'main-full': 'calc(100vh - 116px)',
      },
      gridTemplateColumns,
      gridColumn,
    },
  },
  safelist: [
    {
      pattern: new RegExp(
        `(gap-(x|y)-(0|1|2|3|4|5|6|7|8))|(col-span-(0|1|2|3|4|5|6|7|8|9|10|11|12|${gridColumnPattern}))`,
      ),
    },
  ],
  plugins: [daisyui, tailwindcssForms],
}

export default config
