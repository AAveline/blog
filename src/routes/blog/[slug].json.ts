import articles from "$lib/api/articles";
import type { DBArticle } from "$lib/types";
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }): Promise<{body: DBArticle} | undefined> {
	const { slug } = params;
	const article = articles[slug] as DBArticle;
	
	if (article) {
		return {
			body: article
		};
	}
}