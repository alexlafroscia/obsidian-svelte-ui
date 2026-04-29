import { App, PluginSettingTab, Setting } from 'obsidian';
import DemoObsidianSvelteUI from './main';

export interface DemoSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: DemoSettings = {
	mySetting: 'default'
};

export class ObsidianSvelteuiSettingsTab extends PluginSettingTab {
	plugin: DemoObsidianSvelteUI;

	constructor(app: App, plugin: DemoObsidianSvelteUI) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Settings #1')
			.setDesc("It's a secret")
			.addText((text) =>
				text
					.setPlaceholder('Enter your secret')
					.setValue(this.plugin.settings.mySetting)
					.onChange(async (value) => {
						this.plugin.settings.mySetting = value;
						await this.plugin.saveSettings();
					})
			);
	}
}
