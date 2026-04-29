# `Color`

Wraps Obsidian's `ColorComponent` class as a Svelte component. Renders a color picker input.

```svelte
<script>
	import { Color } from 'obsidian-svelte-ui';

	let color = $state('#ff0000');
</script>

<Color value={color} onChange={(v) => (color = v)} />
```

## Props

| Prop       | Type                         | Default | Description                             |
| ---------- | ---------------------------- | ------- | --------------------------------------- |
| `disabled` | `boolean`                    | `false` | Disable the color picker                |
| `onChange` | `(value: HexString) => void` | —       | Called when the selected color changes  |
| `value`    | `HexString`                  | —       | Current color value as a CSS hex string |

`HexString` is a CSS hex color string (e.g. `'#ff0000'`), as defined by Obsidian's type system.
