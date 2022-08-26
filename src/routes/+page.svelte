<script>
	import Header from '../components/Header.svelte';
	import ReadMoreLink from '../components/ReadMoreLink.svelte';
	export let data;

	const showUnpublishedArticles = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>Dev Blog</title>
</svelte:head>

<main>
	<Header homepage={true} title="Dev Blog" />
	<section class="post-wrapper">
		{#each data.posts as item (item.path)}
			{#if showUnpublishedArticles || item.metadata.published}
				<article class="preview-wrapper">
					<time>{item.metadata.publishDate}</time>
					<a href={item.path}>
						<h2>{item.metadata.title}</h2>
						<p>{item.metadata.description}</p>
					</a>
					<ReadMoreLink link={item.path} />
				</article>
			{/if}
		{/each}
	</section>
</main>

<style lang="scss">
	article {
		margin-bottom: 56px;
	}

	.preview-wrapper {
		display: flex;
		flex-direction: column;
		time {
			font-size: 14px;
			font-family: var(--font);
			margin-bottom: 8px;
			color: #bbbbbb;
		}

		h2 {
			padding-top: 0;
		}

		p {
			margin-top: 0;
			margin-bottom: 16px;
		}

		a {
			color: #ffffff;
			text-decoration: none;
		}
	}
	.preview-wrapper a:hover {
		cursor: pointer;

		h2 {
			text-decoration: underline;
		}
	}
</style>
