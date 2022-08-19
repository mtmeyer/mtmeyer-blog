<script>
	import ArrowIcon from './ArrowIcon.svelte';
	import ChevronIcon from './ChevronIcon.svelte';
	export let link;

	$: arrowFill = '#ffffff';
</script>

<a
	href={link}
	on:mouseenter={() => (arrowFill = '#fc7373')}
	on:mouseleave={() => (arrowFill = '#ffffff')}
>
	<span>Read more</span>
	<div class="icon-wrapper">
		<ArrowIcon width={16} height={16} fill={arrowFill} />
		<div class="chevron chevron-1">
			<ChevronIcon width={22} height={22} fill="#fc7373" />
		</div>
		<div class="chevron chevron-2">
			<ChevronIcon width={18} height={18} fill="#fc7373" />
		</div>
		<div class="chevron chevron-3">
			<ChevronIcon width={16} height={16} fill="#fc7373" />
		</div>
	</div>
</a>

<style lang="scss">
	a {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #ffffff;
		text-decoration: none;
		font-family: var(--font-heading);

		span {
			padding-bottom: 3px;
		}

		&:hover {
			.chevron-1 {
				opacity: 0.9;
			}
			.chevron-2 {
				opacity: 0.6;
			}
			.chevron-3 {
				opacity: 0.4;
			}
		}
	}

	.chevron {
		opacity: 0;
		transition: opacity 0.2s;
		display: flex;
		align-items: center;
	}

	.chevron-1 {
		margin-left: -7px;
		transition-delay: 0.05s;
	}
	.chevron-2 {
		margin-left: -12px;
		transition-delay: 0.1s;
	}
	.chevron-3 {
		margin-left: -10px;
		transition-delay: 0.15s;
	}

	.icon-wrapper {
		display: flex;
		align-items: center;
	}

	/* .icon-wrapper {
		opacity: 0;
		transition: opacity 0.2s;
	} */
</style>
