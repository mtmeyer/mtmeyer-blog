const allPosts = import.meta.glob('./posts/**');

let body = [];
for (let path in allPosts) {
	body.push(
		allPosts[path]().then(({ metadata }) => {
			return { path: path.replace('/+page.md', ''), metadata };
		})
	);
}

export const load = async () => {
	const posts = await Promise.all(body);

	return {
		posts
	};
};
