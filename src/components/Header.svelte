<script>
	export let homepage = false;
</script>

<header>
	<a href="/" class:homepage> <h1 class:homepage>Dev Blog</h1></a>
</header>

<style lang="scss">
	h1 {
		font-size: 24px;
		color: #fc7373;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.homepage {
		h1 {
			font-size: 42px;
		}

		&:hover {
			text-decoration: none;
		}
	}
</style>
