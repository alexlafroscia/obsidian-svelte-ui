# `TextArea`

Wraps Obsidian's `TextAreaComponent` class as a Svelte component. Renders a multi-line text input.

```svelte
<script>
	import { TextArea } from 'obsidian-svelte-ui';

	let notes = $state('');
</script>

<TextArea value={notes} placeholder="Enter notes..." onChange={(v) => (notes = v)} />
```

## Props

| Prop          | Type                      | Default | Description                   |
| ------------- | ------------------------- | ------- | ----------------------------- |
| `disabled`    | `boolean`                 | `false` | Disable the input             |
| `onChange`    | `(value: string) => void` | —       | Called when the value changes |
| `placeholder` | `string`                  | —       | Placeholder text              |
| `value`       | `string`                  | —       | Current value                 |

For single-line input, use [`Text`](Text.md) instead.
