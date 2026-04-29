# `MomentFormat`

Wraps Obsidian's `MomentFormatComponent` class as a Svelte component. Renders a text input for entering a [Moment.js](https://momentjs.com/docs/#/displaying/format/) format string, with a live preview of the formatted current date/time.

```svelte
<script>
	import { MomentFormat } from 'obsidian-svelte-ui';

	let format = $state('YYYY-MM-DD');
</script>

<MomentFormat
	value={format}
	defaultFormat="YYYY-MM-DD"
	placeholder="Date format"
	onChange={(v) => (format = v)}
/>
```

## Props

| Prop            | Type                      | Default | Description                                    |
| --------------- | ------------------------- | ------- | ---------------------------------------------- |
| `defaultFormat` | `string`                  | —       | Fallback format shown when the input is empty  |
| `disabled`      | `boolean`                 | `false` | Disable the input                              |
| `onChange`      | `(value: string) => void` | —       | Called when the format string changes          |
| `placeholder`   | `string`                  | —       | Placeholder text shown when the input is empty |
| `value`         | `string`                  | —       | Current format string value                    |
