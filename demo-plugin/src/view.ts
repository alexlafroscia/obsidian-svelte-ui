import { ItemView, WorkspaceLeaf } from 'obsidian';

export const VIEW_TYPE = 'demo-obsidian-svelte-ui-components';

export class DemoObsidianSvelteUIComponentsView extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType(): string {
		return VIEW_TYPE;
	}

	getDisplayText(): string {
		return 'Svelte UI Components';
	}

	async onOpen(): Promise<void> {
		this.contentEl.empty();
	}

	async onClose(): Promise<void> {}
}
