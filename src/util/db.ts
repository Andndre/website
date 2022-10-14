import { createClient } from '@supabase/supabase-js';

export type Blog = {
	slug: string;
	created_at: string;
};

export const supabaseServerClient = createClient(
	import.meta.env.PUBLIC_SUPABASE_URL,
	import.meta.env.SUPABASE_SERVICE_ROLE
);

export const supabaseWebClient = createClient(
	import.meta.env.PUBLIC_SUPABASE_URL,
	import.meta.env.SUPABASE_SERVICE_ROLE
);

export async function getAllBlogs() {
	return (await supabaseWebClient.from<Blog>('blog').select('*')).data;
}

export async function getComments(slug: string) {
	return (
		await supabaseWebClient.from('comment').select('*').eq('_blog_slug', slug)
	).data;
}

export async function getBlogFromSlug(slug: string) {
	return (
		await supabaseWebClient
			.from<Blog>('blog')
			.select('*')
			.eq('slug', slug)
			.single()
	).data;
}

export async function getLink(name: string) {
	return (
		await supabaseWebClient.from('link').select('url').eq('slug', name).single()
	).data.url;
}

export async function publishLink(slug: string, url: string) {
	const res = await supabaseServerClient.from('link').insert({ slug, url });
	return { error: res.error, data: res.data };
}
