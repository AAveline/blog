<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const url = `/blog/${page.params.slug}.json`;
		const res = await fetch(url);
    
		if (res.ok) {
			return {
				props: {
					article: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import type { DBArticle } from "$lib/types";
	export let article: DBArticle;
</script>

<svelte:head>
	<title>Blog - {article.attributes.title}</title>
	<meta name="title" content={article.attributes.title} />
	<meta property="og:title" content={article.attributes.title} />
	<meta property="twitter:title" content={article.attributes.title} />
	<meta name="description" content={article.attributes.description}  />
	<meta property="og:description" content={article.attributes.description} />
	<meta property="twitter:description" content={article.attributes.description} />
</svelte:head>

<div>
	{@html article.html}
</div>
