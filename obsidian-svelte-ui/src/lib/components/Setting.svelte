<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Setting as ObsidianSetting, type TooltipOptions } from 'obsidian';
	import { ImperativeComponent } from 'svelte-imperative';

	import BindAttachments from '$lib/utils/BindAttachments.svelte';
	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import RenderSnippet from '$lib/utils/RenderSnippet.svelte';
	import {
		bindMethodArgumentsToProps,
		bindMethodsToBooleanProps,
		bindPropToMethod
	} from '$lib/utils/props-to-methods.svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		desc?: string;
		disabled?: boolean;
		heading?: boolean;
		name?: string;
		tooltip?: string;
		tooltipOptions?: TooltipOptions;
	}

	let {
		children,
		class: cls,
		desc,
		disabled = false,
		heading = false,
		name,
		tooltip,
		tooltipOptions,
		...rest
	}: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new ObsidianSetting(containerEl);
		}
	});

	let controlEl = $derived(instance?.controlEl);
	let settingEl = $derived(instance?.settingEl);

	bindMethodArgumentsToProps(() => instance, {
		setClass: () => cls,
		setDesc: () => desc,
		setDisabled: () => disabled,
		setName: () => name
	});

	bindMethodsToBooleanProps(() => instance, {
		setHeading: () => heading
	});

	bindPropToMethod(
		() => instance,
		() => tooltip,
		(c, v) => {
			if (v !== undefined) c.setTooltip(v, tooltipOptions);
		}
	);

	$effect(() => {
		if (!controlEl || !children) return;
		const ic = new ImperativeComponent(controlEl, RenderSnippet, { snippet: children });
		return () => ic.destroy();
	});
</script>

<ExposeContainerElement bind:containerEl />
<BindAttachments node={settingEl} {...rest} />
