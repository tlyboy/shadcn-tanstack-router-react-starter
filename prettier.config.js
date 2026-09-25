//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  semi: false,
  singleQuote: true,
  tailwindFunctions: ['cn', 'cva'],
  tailwindStylesheet: 'src/styles.css',
}

export default config
