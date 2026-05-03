import { App, PluginSettingTab } from 'obsidian';
import { SvelteComponent } from 'obsidian-svelte-ui';

import type DemoObsidianSvelteUI from './main';
import Settings from './Settings.svelte';

export interface DemoSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: DemoSettings = {
	mySetting: 'default'
};

export class ObsidianSvelteuiSettingsTab extends PluginSettingTab {
	plugin: DemoObsidianSvelteUI;

	private view?: SvelteComponent;

	constructor(app: App, plugin: DemoObsidianSvelteUI) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		this.view = new SvelteComponent(Settings, {
			target: this.containerEl,
			props: {
				plugin: this.plugin
			}
		});
		this.view.load();
	}

	hide(): void {
		this.view?.unload();
		this.view = undefined;
	}
}
