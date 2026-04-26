<script lang="ts">
	import type { Snippet } from 'svelte';
	import { SettingGroup as ObsidianSettingGroup } from 'obsidian';
	import { ImperativeComponent } from 'svelte-imperative';

	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import RenderSnippet from '$lib/utils/RenderSnippet.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		heading?: string;
	}

	let { children, class: cls, heading }: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new ObsidianSettingGroup(containerEl);
		}
	});

	// Probe the group's inner container via addSetting, then remove the empty row.
	let innerContainerEl: HTMLElement | null | undefined = $state();

	$effect(() => {
		if (!instance) {
			innerContainerEl = undefined;
			return;
		}
		instance.addSetting((s) => {
			innerContainerEl = s.settingEl.parentElement;
			s.settingEl.remove();
		});
	});

	bindMethodArgumentsToProps(() => instance, {
		addClass: () => cls,
		setHeading: () => heading
	});

	$effect(() => {
		if (!innerContainerEl || !children) return;
		const ic = new ImperativeComponent(innerContainerEl, RenderSnippet, { snippet: children });
		return () => ic.destroy();
	});
</script>

<ExposeContainerElement bind:containerEl />
