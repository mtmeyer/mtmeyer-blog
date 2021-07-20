<script context="module">
	import Header from '../components/Header.svelte';
	const allPosts = import.meta.glob('./posts/*.md');

	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path: path.replace('.md', ''), metadata };
			})
		);
	}

	export const load = async () => {
		const posts = await Promise.all(body);

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<main>
	<Header homepage={true} />
	<section class="post-wrapper">
		{#each posts as item}
			<article>
				<a href={item.path} class="preview-wrapper">
					<time>1 June, 2021</time>
					<h2>{item.metadata.title}</h2>
					<p>{item.metadata.description}</p>
				</a>
			</article>
		{/each}
	</section>
</main>

<style lang="scss">
	article {
		margin-bottom: 56px;
	}

	.preview-wrapper {
		color: #ffffff;
		text-decoration: none;
		time {
			font-size: 12px;
			font-family: 'Catamaran', sans-serif;
		}

		h2 {
			font-family: 'Catamaran', sans-serif;
			font-size: 32px;
			margin: 0;
		}

		p {
			margin-top: 0;
		}

		&:hover {
			cursor: pointer;

			h2 {
				text-decoration: underline;
			}
		}
	}
</style>
