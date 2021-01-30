import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import banner from '../../banner'

import { DIST_UNIVERSAL as outDir, SRC } from '../../const'

export default {
  input: `${SRC}/index.ts`,
  plugins: [
    typescript({
      removeComments: true,
      sourceMap: true,
      // outDir: `./${outDir}`,
      module: 'ESNext', //"None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext"
      target: 'ESNext', //"ES3"  "ES5" "ES6"/"ES2015" "ES2016" "ES2017" "ES2018" "ES2019" "ES2020" "ESNext"
    }),
  ],
  output: [
    {
      file: `${outDir}/alpaca.js`,
      // dir: outDir,
      format: 'es',
      name: 'alpaca',
      sourcemap: true,
      banner: banner,
      // plugins: [nodeResolve({ browser: true })],
    },
    {
      file: `${outDir}/alpaca.min.js`,
      // dir: outDir,
      format: 'es',
      name: 'alpaca',
      sourcemap: false,
      banner: banner,
      plugins: [terser({ output: { comments: false } })],
    },
  ],
}
