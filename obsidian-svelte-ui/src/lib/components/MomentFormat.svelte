<script lang="ts">
	import { MomentFormatComponent } from 'obsidian';

	import BindAttachments from '$lib/utils/BindAttachments.svelte';
	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	type OnChangeCallback = Parameters<MomentFormatComponent['onChange']>[0];

	interface Props {
		defaultFormat?: string;
		disabled?: boolean;
		onChange?: OnChangeCallback;
		placeholder?: string;
		value?: string;
	}

	let { defaultFormat, disabled = false, onChange, placeholder, value, ...rest }: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new MomentFormatComponent(containerEl);
		}
	});
	let inputEl = $derived(instance?.inputEl);

	bindMethodArgumentsToProps(() => instance, {
		onChange: () => onChange,
		setDefaultFormat: () => defaultFormat,
		setDisabled: () => disabled,
		setPlaceholder: () => placeholder,
		setValue: () => value
	});
</script>

<ExposeContainerElement bind:containerEl />
<BindAttachments node={inputEl} {...rest} />
