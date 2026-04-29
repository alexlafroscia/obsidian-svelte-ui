import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, DemoSettings, ObsidianSvelteuiSettingsTab } from './settings';

export default class DemoObsidianSvelteUI extends Plugin {
	settings!: DemoSettings;

	async onload() {
		await this.loadSettings();

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new ObsidianSvelteuiSettingsTab(this.app, this));
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
