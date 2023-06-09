import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
	input: './src/index.ts',

	output: {
		dir: 'dist',
		format: 'es',
		preserveModules: true
	},
    plugins: [
		typescript(), 
		postcss({
			extract: true,
			autoModules: true
		})
	],
	external: [
		'react'
	]
};
