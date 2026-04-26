<script lang="ts">
	import { ProgressBarComponent } from 'obsidian';

	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	interface Props {
		value?: number;
	}

	let { value }: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new ProgressBarComponent(containerEl);
		}
	});

	bindMethodArgumentsToProps(() => instance, {
		setValue: () => value
	});
</script>

<ExposeContainerElement bind:containerEl />
