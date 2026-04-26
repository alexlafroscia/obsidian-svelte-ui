<script lang="ts">
	import { ColorComponent, type HexString } from 'obsidian';

	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	type OnChangeCallback = Parameters<ColorComponent['onChange']>[0];

	interface Props {
		disabled?: boolean;
		onChange?: OnChangeCallback;
		value?: HexString;
	}

	let { disabled = false, onChange, value }: Props = $props();

	let containerEl = $state<HTMLElement>();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new ColorComponent(containerEl);
		}
	});

	bindMethodArgumentsToProps(() => instance, {
		onChange: () => onChange,
		setDisabled: () => disabled,
		setValue: () => value
	});
</script>

<ExposeContainerElement bind:containerEl />
