<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ButtonComponent } from 'obsidian';

	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import ExposeText from '$lib/utils/ExposeText.svelte';

	type OnClickCallback = Parameters<ButtonComponent['onClick']>[0];

	interface Props {
		children?: Snippet;
		cta?: boolean;
		disabled?: boolean;
		onClick?: OnClickCallback;
		warning?: boolean;
		class?: string;
	}

	let { children, cta = false, disabled = false, onClick, warning }: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();
	let buttonInstance: ButtonComponent | undefined = $state();

	let name: string | undefined = $state();

	$effect(() => {
		if (containerEl) {
			buttonInstance = new ButtonComponent(containerEl);
		}
	});

	$effect(() => {
		if (typeof name !== 'undefined') {
			buttonInstance?.setButtonText(name);
		}
	});

	$effect(() => {
		if (cta) {
			buttonInstance?.setCta();

			return () => {
				return buttonInstance?.removeCta();
			};
		}
	});

	$effect(() => {
		buttonInstance?.setDisabled(disabled);
	});

	$effect(() => {
		if (onClick) {
			buttonInstance?.onClick(onClick);
		}
	});

	$effect(() => {
		if (warning) {
			buttonInstance?.setWarning();
		}
	});
</script>

<ExposeContainerElement bind:containerEl />

<ExposeText bind:contents={name}>
	{@render children?.()}
</ExposeText>
