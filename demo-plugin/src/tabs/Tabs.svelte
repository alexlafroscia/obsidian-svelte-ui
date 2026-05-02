<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Button } from 'obsidian-svelte-ui';

	import { createTabController } from './tab-controller.svelte';

	const controller = createTabController();

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<ul class="tabs">
	{#each controller.tabs as tab, index}
		<li class={['tab', { active: controller.isActive(tab) }]}>
			<Button
				onClick={() => {
					controller.activeTabIndex = index;
				}}
			>
				{tab}
			</Button>
		</li>
	{/each}
</ul>

{@render children()}

<style>
	.tabs {
		display: flex;
		padding-left: 0;
		overflow-x: auto;
	}

	.tab {
		list-style-type: none;
	}

	.tab.active :global(button) {
		background-color: var(--interactive-accent);
	}

	.tab:not(:first-child) :global(button) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.tab:not(:last-child) :global(button) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
</style>
