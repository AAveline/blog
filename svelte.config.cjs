const sveltePreprocess = require('svelte-preprocess');
const vercel = require('@sveltejs/adapter-vercel');
const mdPlugin = require('vite-plugin-markdown').default;
const { Mode } = require('vite-plugin-markdown');

const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			plugins: [mdPlugin({ mode: Mode.HTML})]
		}
	}
};
