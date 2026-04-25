<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ButtonComponent, type IconName } from 'obsidian';

	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import ExposeText from '$lib/utils/ExposeText.svelte';

	import {
		bindMethodsToBooleanProps,
		bindMethodArgumentsToProps
	} from '$lib/utils/props-to-methods.svelte';

	type OnClickCallback = Parameters<ButtonComponent['onClick']>[0];

	interface Props {
		children?: Snippet;
		class?: string;
		cta?: boolean;
		disabled?: boolean;
		icon?: IconName;
		onClick?: OnClickCallback;
		warning?: boolean;
	}

	let {
		children,
		class: classNames,
		cta = false,
		disabled = false,
		icon,
		onClick,
		warning = false
	}: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();
	let name: string | undefined = $state();

	let buttonInstance = $derived.by(() => {
		if (containerEl) {
			return new ButtonComponent(containerEl);
		}
	});

	bindMethodsToBooleanProps(() => buttonInstance, {
		setCta: [() => cta, (c) => c.removeCta()],
		setWarning: [
			() => warning,
			(c) => {
				// No public API to remove warning, but this is the
				// class that it adds under-the-hood
				c.buttonEl.removeClass('mod-warning');
			}
		]
	});

	bindMethodArgumentsToProps(() => buttonInstance, {
		onClick: () => onClick,
		setButtonText: () => name,
		setClass: () => classNames,
		setDisabled: () => disabled,
		setIcon: () => icon
	});
</script>

<ExposeContainerElement bind:containerEl />

{#if children}
	<ExposeText bind:contents={name}>
		{@render children()}
	</ExposeText>
{/if}
