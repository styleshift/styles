import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
 input: 'src/index.ts',
 output: [
  {
   file: 'dist/index.js',
   format: 'esm',
  },
  {
   file: 'dist/index.cjs',
   format: 'cjs',
  },
 ],
 plugins: [
  resolve(),
  commonjs(),
  typescript({
   tsconfig: './tsconfig.json',
   declaration: true,
   declarationDir: './dist',
  }),
 ],
 external: ['class-variance-authority'],
};
