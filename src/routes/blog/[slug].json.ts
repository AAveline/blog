import articles from "$lib/api/articles";
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	const { slug } = params;
	const article = articles[slug];
	console.log(article)
	if (article) {
		return {
			body: article
		};
	}
}