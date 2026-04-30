import { ItemView, WorkspaceLeaf } from 'obsidian';
import { SvelteComponent } from 'obsidian-svelte-ui';

import ComponentDemo from './ComponentDemo.svelte';

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
		this.addChild(
			new SvelteComponent(ComponentDemo, {
				target: this.contentEl,
				props: {}
			})
		);
	}
}
