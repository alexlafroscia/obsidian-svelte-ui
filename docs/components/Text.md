# `Text`

Wraps Obsidian's `TextComponent` class as a Svelte component. Renders a single-line text input.

```svelte
<script>
	import { Text } from 'obsidian-svelte-ui';

	let name = $state('');
</script>

<Text value={name} placeholder="Enter a name..." onChange={(v) => (name = v)} />
```

## Props

| Prop          | Type                      | Default | Description                   |
| ------------- | ------------------------- | ------- | ----------------------------- |
| `disabled`    | `boolean`                 | `false` | Disable the input             |
| `onChange`    | `(value: string) => void` | —       | Called when the value changes |
| `placeholder` | `string`                  | —       | Placeholder text              |
| `value`       | `string`                  | —       | Current value                 |

For multi-line input, use [`TextArea`](TextArea.md) instead.
