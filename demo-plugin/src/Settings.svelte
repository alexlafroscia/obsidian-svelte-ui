<script lang="ts">
	import { Text, Search, ExtraButton, Setting, SettingGroup } from 'obsidian-svelte-ui';

	import type DemoObsidianSvelteUI from './main';

	interface Props {
		plugin: DemoObsidianSvelteUI;
	}

	let { plugin }: Props = $props();

	async function save(value: string) {
		plugin.settings.mySetting = value;
		await plugin.saveSettings();
	}
</script>

<SettingGroup heading="First Group">
	{#snippet controls()}
		<ExtraButton icon="lucide-search" />
	{/snippet}

	{#snippet search()}
		<Search placeholder="Search Input" />
	{/snippet}

	{#snippet children()}
		<Setting name="Settings #1" desc="It's a secret">
			<Text
				placeholder="Enter your secret"
				value={plugin.settings.mySetting}
				onChange={save}
			/>
		</Setting>
	{/snippet}
</SettingGroup>

<SettingGroup heading="Second Group">
	{#snippet controls()}
		<ExtraButton icon="lucide-search" />
	{/snippet}

	{#snippet search()}
		<Search placeholder="Search Input" />
	{/snippet}

	{#snippet children()}
		<Setting name="Settings #1" desc="It's a secret">
			<Text
				placeholder="Enter your secret"
				value={plugin.settings.mySetting}
				onChange={save}
			/>
		</Setting>
	{/snippet}
</SettingGroup>
