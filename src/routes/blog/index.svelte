<script context="module" lang="ts">
  import * as articlesModule from "$lib/api/articles";

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load() {
    const articles = Object.values(articlesModule.default).map((val) => val);
  
			return {
				props: {
					articles,
				}
			};
	}
</script>

<script lang="ts">
  export let articles: {attributes: {title: string; date: string; description: string; slug: string; }}[] = [];
</script>

<svelte:head>
	<title>Blog - Tous les articles</title>
</svelte:head>

<div>
  {#each articles as article}
    <article>
      <h2>{article.attributes.title}</h2>
      <p>{article.attributes.description}</p>
      <a href="/blog/{article.attributes.slug}">Consulter l'article</a>
    </article>
  {/each}
</div>

<style lang="scss">
  div {
    color: var(--grey);
    display: flex;
    justify-content: center;
    padding-top: 40px;
    flex-flow: column;
    align-items: center;
  }

  article {
    padding: 24px;

    h2, p {
      margin: 0;
    }

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 20px;
      font-style: italic;
    }

    a {
      color: var(--blue);
      text-decoration: none;
      margin-top: 8px;
      display: block;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  article:first-child {
    margin-bottom: 24px;

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 25px;
    }
  }

  article:not(:first-child) {
    width: 50rem;
    box-shadow: 0 1px 0 0 #ddd;
  }

  article:hover {
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 12%);
    border-radius: 8px;
  }
</style>