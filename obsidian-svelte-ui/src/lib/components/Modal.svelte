<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Modal as ObsidianModal, type App } from 'obsidian';
	import { ImperativeComponent } from 'svelte-imperative';

	import RenderSnippet from '$lib/utils/RenderSnippet.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	interface Props {
		app: App;
		children?: Snippet;
		onClose?: () => void;
		title?: string;
	}

	let { app, children, onClose, title }: Props = $props();

	class SvelteModal extends ObsidianModal {
		private renderedContent: ImperativeComponent<{ snippet: Snippet | undefined }> | undefined;

		onOpen(): void {
			this.renderedContent = new ImperativeComponent(this.contentEl, RenderSnippet, {
				snippet: children
			});
		}

		onClose(): void {
			this.renderedContent?.destroy();
			this.renderedContent = undefined;

			onClose?.();
		}

		updateContent(snippet: Snippet | undefined) {
			this.renderedContent?.modifyProps({ snippet });
		}
	}

	let modalInstance = $derived.by(() => new SvelteModal(app));

	$effect(() => {
		modalInstance.open();

		return () => {
			modalInstance.close();
		};
	});

	bindMethodArgumentsToProps(() => modalInstance, {
		setTitle: () => title,
		updateContent: () => children
	});
</script>
