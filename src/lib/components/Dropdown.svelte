<script lang="ts">
	import { DropdownComponent } from 'obsidian';

	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	type OnChangeCallback = Parameters<DropdownComponent['onChange']>[0];

	interface Props {
		disabled?: boolean;
		onChange?: OnChangeCallback;
		options?: Record<string, string>;
		value?: string;
	}

	let { disabled = false, onChange, options, value }: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new DropdownComponent(containerEl);
		}
	});

	bindMethodArgumentsToProps(() => instance, {
		addOptions: () => options,
		onChange: () => onChange,
		setDisabled: () => disabled,
		setValue: () => value
	});
</script>

<ExposeContainerElement bind:containerEl />
