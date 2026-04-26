# `SettingGroup`

Wraps Obsidian's `SettingGroup` class as a Svelte component. Groups multiple settings under a shared heading.

```svelte
<script>
	import { Setting, SettingGroup, Toggle } from 'obsidian-svelte-ui';

	let enabled = $state(false);
</script>

<SettingGroup heading="Advanced">
	<Setting name="Enable feature" desc="Does the thing">
		<Toggle value={enabled} onChange={(v) => (enabled = v)} />
	</Setting>
</SettingGroup>
```

`<Search>` and `<ExtraButton>` children can also be placed inside the group, matching the `addSearch` and `addExtraButton` methods on the Obsidian API.

## Props

| Prop       | Type      | Default | Description                                                              |
| ---------- | --------- | ------- | ------------------------------------------------------------------------ |
| `children` | `Snippet` | —       | `Setting`, `Search`, or `ExtraButton` components rendered into the group |
| `class`    | `string`  | —       | CSS class added to the group element                                     |
| `heading`  | `string`  | —       | Heading text displayed above the group                                   |
