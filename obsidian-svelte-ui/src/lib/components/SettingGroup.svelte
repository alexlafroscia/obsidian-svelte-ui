<script lang="ts">
	import type { Snippet } from 'svelte';
	import { SettingGroup as ObsidianSettingGroup, type SearchComponent } from 'obsidian';

	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import { bindSnippet } from '$lib/utils/RenderSnippet.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	interface SearchComponentWithDOMRef extends SearchComponent {
		containerEl: HTMLElement;
	}

	function hasDOMRef(search: SearchComponent): search is SearchComponentWithDOMRef {
		return 'containerEl' in search;
	}

	interface Props {
		children?: Snippet;
		class?: string;
		controls?: Snippet;
		heading?: string;
		search?: Snippet;
	}

	let { children, class: cls, controls, heading, search }: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new ObsidianSettingGroup(containerEl);
		}
	});

	let settingItemsContainerEl = $state<HTMLElement>();

	$effect(() => {
		if (instance && children) {
			instance?.addSetting((s) => {
				settingItemsContainerEl = s.settingEl.parentElement ?? undefined;
				s.settingEl.remove();
			});
		}
	});

	bindSnippet(
		() => settingItemsContainerEl,
		() => children
	);

	let controlContainerEl = $state<HTMLElement>();

	$effect(() => {
		if (instance && controls) {
			instance.addExtraButton((b) => {
				controlContainerEl = b.extraSettingsEl.parentElement ?? undefined;
				b.extraSettingsEl.remove();
			});
		}
	});

	bindSnippet(
		() => controlContainerEl,
		() => controls
	);

	let searchContainerEl = $state<HTMLElement>();

	$effect(() => {
		if (instance && search) {
			instance.addSearch((s) => {
				if (hasDOMRef(s)) {
					searchContainerEl = s.containerEl.parentElement ?? undefined;
					s.containerEl.remove();
				}
			});
		}
	});

	bindSnippet(
		() => searchContainerEl,
		() => search
	);

	bindMethodArgumentsToProps(() => instance, {
		addClass: () => cls,
		setHeading: () => heading
	});
</script>

<ExposeContainerElement bind:containerEl />

<style>
	/* Emulate setting group spacing, accounting for mount point elements */
	:global(.obsidian-svelte-ui-mount-point:has(.setting-group))
		+ :global(.obsidian-svelte-ui-mount-point)
		:global(.setting-group) {
		margin-top: var(--size-4-6);
	}
</style>
