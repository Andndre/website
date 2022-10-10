import { createClient } from '@supabase/supabase-js';

export type Blog = {
	slug: string;
	created_at: string;
};

export const supabase = createClient(
	import.meta.env.SUPABASE_URL,
	import.meta.env.SUPABASE_ANON
);

export async function getAllBlogs() {
	return (await supabase.from<Blog>('blog').select('*')).data;
}

export async function getComments(slug: string) {
	return (await supabase.from('comment').select('*').eq('_blog_slug', slug))
		.data;
}

export async function getBlogFromSlug(slug: string) {
	return (
		await supabase.from<Blog>('blog').select('*').eq('slug', slug).single()
	).data;
}
