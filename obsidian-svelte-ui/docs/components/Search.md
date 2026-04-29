# `Search`

Wraps Obsidian's `SearchComponent` class as a Svelte component. Renders a search input with a built-in clear button.

```svelte
<script>
	import { Search } from 'obsidian-svelte-ui';

	let query = $state('');
</script>

<Search value={query} placeholder="Search..." onChange={(v) => (query = v)} />
```

## Props

| Prop          | Type                      | Default | Description                          |
| ------------- | ------------------------- | ------- | ------------------------------------ |
| `disabled`    | `boolean`                 | `false` | Disable the input                    |
| `onChange`    | `(value: string) => void` | —       | Called when the search value changes |
| `placeholder` | `string`                  | —       | Placeholder text                     |
| `value`       | `string`                  | —       | Current search value                 |
