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
	export let article: { html: string, attributes: any };
</script>

<svelte:head>
	<title>Blog - {article.attributes.title}</title>
</svelte:head>

<h1>{ article.attributes.title }</h1>
<p>{article.attributes.description }</p>

{@html article.html}