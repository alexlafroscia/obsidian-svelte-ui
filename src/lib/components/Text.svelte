<script lang="ts">
	import { TextComponent } from 'obsidian';

	import BindAttachments from '$lib/utils/BindAttachments.svelte';
	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	type OnChangeCallback = Parameters<TextComponent['onChange']>[0];

	interface Props {
		disabled?: boolean;
		onChange?: OnChangeCallback;
		placeholder?: string;
		value?: string;
	}

	let { disabled = false, onChange, placeholder, value, ...rest }: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new TextComponent(containerEl);
		}
	});
	let inputEl = $derived(instance?.inputEl);

	bindMethodArgumentsToProps(() => instance, {
		onChange: () => onChange,
		setDisabled: () => disabled,
		setPlaceholder: () => placeholder,
		setValue: () => value
	});
</script>

<ExposeContainerElement bind:containerEl />
<BindAttachments node={inputEl} {...rest} />
