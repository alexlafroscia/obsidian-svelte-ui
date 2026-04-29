# `Toggle`

Wraps Obsidian's `ToggleComponent` class as a Svelte component. Renders an on/off toggle switch.

```svelte
<script>
	import { Toggle } from 'obsidian-svelte-ui';

	let enabled = $state(false);
</script>

<Toggle value={enabled} onChange={(v) => (enabled = v)} />
```

## Props

| Prop       | Type                       | Default | Description                          |
| ---------- | -------------------------- | ------- | ------------------------------------ |
| `disabled` | `boolean`                  | `false` | Disable the toggle                   |
| `onChange` | `(value: boolean) => void` | —       | Called when the toggle state changes |
| `value`    | `boolean`                  | —       | Current toggle state                 |
