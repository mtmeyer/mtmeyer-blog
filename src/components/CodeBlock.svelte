<script>
	import Prism from 'prismjs';
	import Highlight from 'prism-svelte-renderer';
	import theme from 'prism-svelte-renderer/themes/dracula';

	export let code;
	export let language = 'javascript';
</script>

<div style="background-color: {theme.plain.backgroundColor}" class="code-wrapper">
	<Highlight {theme} {Prism} text={code} {language} />
</div>

<style>
	.code-wrapper {
		padding-top: 15px;
		padding-left: 24px;
	}
</style>
