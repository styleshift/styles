import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs'
    },
    {
      file: 'dist/index.js',
      format: 'es'
    }
  ],
  external: ['class-variance-authority'],
  plugins: [
    resolve(),
    commonjs()
  ]
}; 