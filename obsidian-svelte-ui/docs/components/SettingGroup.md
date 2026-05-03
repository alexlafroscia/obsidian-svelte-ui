# `SettingGroup`

Wraps Obsidian's `SettingGroup` class as a Svelte component. Groups multiple settings under a shared heading.

```svelte
<script>
	import { ExtraButton, Search, Setting, SettingGroup, Text } from 'obsidian-svelte-ui';
</script>

<SettingGroup heading="Advanced">
	{#snippet controls()}
		<ExtraButton icon="lucide-refresh-cw" />
	{/snippet}

	{#snippet search()}
		<Search placeholder="Filter settings..." />
	{/snippet}

	{#snippet children()}
		<Setting name="Enable feature" desc="Does the thing">
			<Text value="example" />
		</Setting>
	{/snippet}
</SettingGroup>
```

The `controls`, `search`, and `children` snippets correspond to the `addExtraButton`, `addSearch`, and `addSetting` methods on the Obsidian `SettingGroup` API respectively.

## Props

| Prop       | Type      | Default | Description                                              |
| ---------- | --------- | ------- | -------------------------------------------------------- |
| `children` | `Snippet` | —       | `Setting` components rendered into the group body        |
| `class`    | `string`  | —       | CSS class added to the group element                     |
| `controls` | `Snippet` | —       | `ExtraButton` components rendered into the group heading |
| `heading`  | `string`  | —       | Heading text displayed above the group                   |
| `search`   | `Snippet` | —       | `Search` component rendered into the group heading       |
