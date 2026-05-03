# `Setting`

Wraps Obsidian's `Setting` class as a Svelte component. Renders a labelled row with a name, description, and optional control area.

```svelte
<script>
	import { Setting, Toggle } from 'obsidian-svelte-ui';

	let enabled = $state(false);
</script>

<Setting name="Enable feature" desc="Does the thing">
	<Toggle value={enabled} onChange={(v) => (enabled = v)} />
</Setting>
```

Use the `heading` prop to render the row as a section heading instead of a form control:

```svelte
<Setting heading name="Advanced" />
```

## Props

| Prop             | Type             | Default | Description                                              |
| ---------------- | ---------------- | ------- | -------------------------------------------------------- |
| `children`       | `Snippet`        | —       | Controls rendered into the right-hand `controlEl` area   |
| `class`          | `string`         | —       | Additional CSS class applied to the setting row          |
| `desc`           | `string`         | —       | Description text shown below the name                    |
| `disabled`       | `boolean`        | `false` | Disables the setting row                                 |
| `heading`        | `boolean`        | `false` | Renders the row as a section heading (no control layout) |
| `name`           | `string`         | —       | Label text for the setting                               |
| `tooltip`        | `string`         | —       | Tooltip shown on hover                                   |
| `tooltipOptions` | `TooltipOptions` | —       | Options passed to `setTooltip`                           |

The `children` snippet is rendered into Obsidian's `controlEl`, allowing any of the existing form components (`Toggle`, `Button`, `Text`, etc.) to be placed there directly.
