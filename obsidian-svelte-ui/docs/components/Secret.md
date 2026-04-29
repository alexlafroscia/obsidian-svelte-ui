# `Secret`

Wraps Obsidian's `SecretComponent` class as a Svelte component. Renders a password-style input that obscures its value.

```svelte
<script>
	import { Secret } from 'obsidian-svelte-ui';

	let { app } = $props();
	let apiKey = $state('');
</script>

<Secret {app} value={apiKey} onChange={(v) => (apiKey = v)} />
```

## Props

| Prop       | Type                      | Default  | Description                   |
| ---------- | ------------------------- | -------- | ----------------------------- |
| `app`      | `App`                     | required | The Obsidian `App` instance   |
| `onChange` | `(value: string) => void` | —        | Called when the value changes |
| `value`    | `string`                  | —        | Current value                 |
