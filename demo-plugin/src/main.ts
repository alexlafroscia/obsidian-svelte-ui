import { Plugin, WorkspaceLeaf } from 'obsidian';
import { DEFAULT_SETTINGS, ObsidianSvelteuiSettingsTab, type DemoSettings } from './settings';
import { DemoObsidianSvelteUIComponentsView, VIEW_TYPE } from './view';

export default class DemoObsidianSvelteUI extends Plugin {
	settings!: DemoSettings;

	async onload() {
		await this.loadSettings();

		this.registerView(VIEW_TYPE, (leaf) => new DemoObsidianSvelteUIComponentsView(leaf));

		this.addCommand({
			id: 'open-demo-components',
			name: 'Open component demo',
			callback: () => this.openView()
		});

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new ObsidianSvelteuiSettingsTab(this.app, this));
	}

	async openView() {
		const { workspace } = this.app;

		let leaf: WorkspaceLeaf | null = workspace.getLeavesOfType(VIEW_TYPE)[0] ?? null;

		if (!leaf) {
			leaf = workspace.getLeaf('tab');
			await leaf.setViewState({ type: VIEW_TYPE, active: true });
		}

		await workspace.revealLeaf(leaf);
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			(await this.loadData()) as Partial<DemoSettings>
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
