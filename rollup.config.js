import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: '_dev/assets/brucemap.js',
    exports: 'auto',
    format: 'umd',
    name: 'BruceMap'
  },
  plugins: [
    typescript(),
  ],
}
