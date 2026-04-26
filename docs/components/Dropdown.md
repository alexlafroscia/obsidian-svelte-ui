# `Dropdown`

Wraps Obsidian's `DropdownComponent` class as a Svelte component.

```svelte
<script>
	import { Dropdown } from 'obsidian-svelte-ui';

	let selected = $state('option1');

	const options = {
		option1: 'Option 1',
		option2: 'Option 2',
		option3: 'Option 3'
	};
</script>

<Dropdown {options} value={selected} onChange={(v) => (selected = v)} />
```

## Props

| Prop       | Type                      | Default | Description                            |
| ---------- | ------------------------- | ------- | -------------------------------------- |
| `disabled` | `boolean`                 | `false` | Disable the dropdown                   |
| `onChange` | `(value: string) => void` | —       | Called when the selected value changes |
| `options`  | `Record<string, string>`  | —       | Map of option values to display labels |
| `value`    | `string`                  | —       | The currently selected option value    |

In the `options` record, keys are the values passed to `onChange` and stored internally; values are the human-readable labels shown in the dropdown.
