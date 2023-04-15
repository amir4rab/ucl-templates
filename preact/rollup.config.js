import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    preserveModules: true,
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json'
    }),
    postcss({
      extract: true,
      autoModules: true,
    }),
  ],
  external: ['preact', 'preact/jsx-runtime'],
};
