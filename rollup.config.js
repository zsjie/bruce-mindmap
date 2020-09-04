import Babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: '_dev/assets/brucemap.js',
    exports: 'auto',
    format: 'umd',
    name: 'BruceMap',
    globals: {
      lodash: 'lodash'
    },
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    Babel({
      include: ['src/**'],
      exclude: /\**node_modules\**/,
      extensions: ['.js', '.ts'],
      babelrc: false,
      babelHelpers: 'runtime',
      skipPreflightCheck: true,
    }),
    typescript(),
  ],
}
