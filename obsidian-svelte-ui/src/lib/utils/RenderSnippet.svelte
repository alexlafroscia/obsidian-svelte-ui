<script lang="ts" module>
	import { ImperativeComponent } from 'svelte-imperative';
	import RenderSnippet from './RenderSnippet.svelte';

	export function bindSnippet(
		produceRoot: () => HTMLElement | undefined,
		produceSnippet: () => Snippet | undefined
	) {
		$effect(() => {
			const root = produceRoot();
			const snippet = produceSnippet();

			if (!root || !snippet) return;
			const ic = new ImperativeComponent(root, RenderSnippet, { snippet });
			return () => ic.destroy();
		});
	}
</script>

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
