# `Button`

Wraps Obsidian's `ButtonComponent` class as a Svelte component.

```svelte
<script>
	import { Button } from 'obsidian-svelte-ui';
</script>

<Button onClick={() => console.log('clicked')}>Click me</Button>
```

## Props

| Prop       | Type                        | Default | Description                                |
| ---------- | --------------------------- | ------- | ------------------------------------------ |
| `children` | `Snippet`                   | —       | Button label text (rendered as plain text) |
| `class`    | `string`                    | —       | Additional CSS class                       |
| `cta`      | `boolean`                   | `false` | Apply call-to-action styling               |
| `disabled` | `boolean`                   | `false` | Disable the button                         |
| `icon`     | `IconName`                  | —       | Obsidian icon to display                   |
| `onClick`  | `(evt: MouseEvent) => void` | —       | Click handler                              |
| `warning`  | `boolean`                   | `false` | Apply warning styling                      |

The button is rendered into the DOM by Obsidian's `ButtonComponent`, so it respects Obsidian's theming and styling conventions automatically.
