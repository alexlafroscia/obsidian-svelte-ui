<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { getTabController } from './Tabs.svelte';

	const controller = getTabController();

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();

	let isActive = $derived(controller.isActive(title));

	onMount(() => {
		return controller.register(title);
	});
</script>

{#if isActive}
	{@render children()}
{/if}
