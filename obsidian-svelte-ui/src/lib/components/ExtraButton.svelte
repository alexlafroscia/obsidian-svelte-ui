<script lang="ts">
	import { ExtraButtonComponent, type IconName } from 'obsidian';

	import BindAttachments from '$lib/utils/BindAttachments.svelte';
	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	type OnClickCallback = Parameters<ExtraButtonComponent['onClick']>[0];

	interface Props {
		disabled?: boolean;
		icon?: IconName;
		onClick?: OnClickCallback;
	}

	let { disabled = false, icon, onClick, ...rest }: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new ExtraButtonComponent(containerEl);
		}
	});
	let extraSettingsEl = $derived(instance?.extraSettingsEl);

	bindMethodArgumentsToProps(() => instance, {
		onClick: () => onClick,
		setDisabled: () => disabled,
		setIcon: () => icon
	});
</script>

<ExposeContainerElement bind:containerEl />
<BindAttachments node={extraSettingsEl} {...rest} />
