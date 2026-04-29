<script lang="ts">
	import { ToggleComponent } from 'obsidian';

	import BindAttachments from '$lib/utils/BindAttachments.svelte';
	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	type OnChangeCallback = Parameters<ToggleComponent['onChange']>[0];

	interface Props {
		disabled?: boolean;
		onChange?: OnChangeCallback;
		value?: boolean;
	}

	let { disabled = false, onChange, value, ...rest }: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new ToggleComponent(containerEl);
		}
	});
	let toggleEl = $derived(instance?.toggleEl);

	bindMethodArgumentsToProps(() => instance, {
		onChange: () => onChange,
		setDisabled: () => disabled,
		setValue: () => value
	});
</script>

<ExposeContainerElement bind:containerEl />
<BindAttachments node={toggleEl} {...rest} />
