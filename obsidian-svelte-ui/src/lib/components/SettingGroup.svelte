<script lang="ts">
	import type { Snippet } from 'svelte';
	import { SettingGroup as ObsidianSettingGroup, type SearchComponent } from 'obsidian';
	import { ImperativeComponent } from 'svelte-imperative';

	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import RenderSnippet from '$lib/utils/RenderSnippet.svelte';
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

	$effect(() => {
		let settingItemsContainerEl: HTMLElement | null | undefined;

		if (instance && children) {
			instance.addSetting((s) => {
				settingItemsContainerEl = s.settingEl.parentElement;
				s.settingEl.remove();
			});
		}

		if (settingItemsContainerEl) {
			const ic = new ImperativeComponent(settingItemsContainerEl, RenderSnippet, {
				snippet: children
			});
			return () => ic.destroy();
		}
	});

	$effect(() => {
		let controlContainerEl: HTMLElement | null | undefined;

		if (instance && controls) {
			instance.addExtraButton((b) => {
				controlContainerEl = b.extraSettingsEl.parentElement;
				b.extraSettingsEl.remove();
			});
		}

		if (controlContainerEl) {
			const ic = new ImperativeComponent(controlContainerEl, RenderSnippet, {
				snippet: controls
			});
			return () => ic.destroy();
		}
	});

	$effect(() => {
		let searchContainerEl: HTMLElement | null | undefined;

		if (instance && search) {
			instance.addSearch((s) => {
				if (hasDOMRef(s)) {
					searchContainerEl = s.containerEl.parentElement;
					s.containerEl.remove();
				}
			});
		}

		if (searchContainerEl) {
			const ic = new ImperativeComponent(searchContainerEl, RenderSnippet, {
				snippet: search
			});
			return () => ic.destroy();
		}
	});

	bindMethodArgumentsToProps(() => instance, {
		addClass: () => cls,
		setHeading: () => heading
	});
</script>

<ExposeContainerElement bind:containerEl />
