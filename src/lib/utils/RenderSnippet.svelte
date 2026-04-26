<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		snippet: Snippet | undefined;
	}

	let { snippet }: Props = $props();
</script>

{#if snippet}
	{@render snippet()}
{/if}
