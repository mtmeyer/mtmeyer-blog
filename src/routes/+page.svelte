<script>
	import Header from '../components/Header.svelte';
	export let data;
</script>

<svelte:head>
	<title>Dev Blog</title>
</svelte:head>

<main>
	<Header homepage={true} title="Dev Blog" />
	<section class="post-wrapper">
		{#each data.posts as item}
			{#if item.metadata.published}
				<article>
					<a href={item.path} class="preview-wrapper">
						<time>{item.metadata.publishDate}</time>
						<h2>{item.metadata.title}</h2>
						<p>{item.metadata.description}</p>
					</a>
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
		color: #ffffff;
		text-decoration: none;
		time {
			font-size: 12px;
			font-family: var(--font);
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
