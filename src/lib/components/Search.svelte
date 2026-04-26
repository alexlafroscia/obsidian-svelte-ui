<script lang="ts">
	import { SearchComponent } from 'obsidian';

	import BindAttachments from '$lib/utils/BindAttachments.svelte';
	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	type OnChangeCallback = Parameters<SearchComponent['onChange']>[0];

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
			return new SearchComponent(containerEl);
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
