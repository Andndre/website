import { getAllBlogs } from './db';

export async function filterBlogsThatUnPublished(allBlogs) {
	const publishedBlogs = await getAllBlogs();

	const blogs = [];

	blogs.push(
		...allBlogs.filter((blog) => {
			for (const pBlog of publishedBlogs) {
				if (blog.frontmatter.slug === pBlog.slug) {
					blog.frontmatter.created_at = pBlog.created_at;
					return true;
				}
			}
			return false;
		})
	);

	blogs.sort((a, b) => {
		return (
			Date.parse(b.frontmatter.created_at) -
			Date.parse(a.frontmatter.created_at)
		);
	});

	return blogs;
}
