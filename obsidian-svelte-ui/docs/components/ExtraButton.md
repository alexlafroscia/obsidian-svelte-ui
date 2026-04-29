# `ExtraButton`

Wraps Obsidian's `ExtraButtonComponent` class as a Svelte component. Renders an icon-only button, typically used as a secondary action in settings UI.

```svelte
<script>
	import { ExtraButton } from 'obsidian-svelte-ui';
</script>

<ExtraButton icon="trash" onClick={() => deleteItem()} />
```

## Props

| Prop       | Type                        | Default | Description              |
| ---------- | --------------------------- | ------- | ------------------------ |
| `disabled` | `boolean`                   | `false` | Disable the button       |
| `icon`     | `IconName`                  | —       | Obsidian icon to display |
| `onClick`  | `(evt: MouseEvent) => void` | —       | Click handler            |

Unlike `Button`, `ExtraButton` does not support a text label — it is icon-only. Use `Button` when you need a labeled button.
