<script context="module" lang="ts">
	import '../app.scss';
		/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	 export async function load({ page }) {
		 return {
			 props: {
				 path: page.path,
			 }
		 }
		}
</script>

<script lang="ts">
	export let path: string = "";
</script>

<nav>
	<a href="/" class:active={path === "/"}>Home</a>
	<a href="/blog/" class:active={path.startsWith("/blog")}>Blog</a>
	<a href="https://github.com/aaveline" target="_blank">Github</a>
	<a href="https://www.linkedin.com/in/aymeric-aveline-943b01146/" target="_blank">Linkedin</a>
</nav>

<main>
	<slot />
</main>

<style lang="scss">
	nav {
		height: 50px;
    display: flex;
    align-items: center;
		position: fixed;

		a {
			font-size: 24px;
			color: var(--grey);
			text-decoration: none;
			padding: 0 24px;
			font-weight: bold;
		}

		a:hover {
			text-decoration: underline;
		}

		.active {
			color: var(--orange);
		}
	}

	main {
		position: relative;
		padding: 0 24px;
		height: calc(100vh - 100px);
		top: 50px;
	}
</style>
