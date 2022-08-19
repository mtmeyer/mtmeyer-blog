<script>
	import Header from '../components/Header.svelte';
	import ReadMoreLink from '../components/ReadMoreLink.svelte';
	export let data;

	$: readMoreArrowFill = '#ffffff';
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
					<a
						href={item.path}
						class="preview-wrapper"
						on:mouseenter={() => (readMoreArrowFill = '#fc7373')}
						on:mouseleave={() => (readMoreArrowFill = '#ffffff')}
					>
						<time>{item.metadata.publishDate}</time>
						<h2>{item.metadata.title}</h2>
						<p>{item.metadata.description}</p>
						<ReadMoreLink link={item.path} arrowFill={readMoreArrowFill} />
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
		display: flex;
		flex-direction: column;
		time {
			font-size: 14px;
			font-family: var(--font);
			margin-bottom: 8px;
			color: #bbbbbb;
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
