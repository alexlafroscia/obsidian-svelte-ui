<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		contents: string | undefined;
		children: Snippet;
	}

	let { contents = $bindable(), children }: Props = $props();

	let container: HTMLElement | undefined = $state();

	$effect(() => {
		if (container) {
			contents = container.innerText;
		}

		if (container?.children.length ?? 0 > 0) {
			console.error('obsidian-svelte-ui: `ExposeText` received non-text children');
		}
	});
</script>

<span style="display: none;" bind:this={container}>
	{@render children()}
</span>
