# `ProgressBar`

Wraps Obsidian's `ProgressBarComponent` class as a Svelte component. Renders a horizontal progress bar.

```svelte
<script>
	import { ProgressBar } from 'obsidian-svelte-ui';

	let progress = $state(50);
</script>

<ProgressBar value={progress} />
```

## Props

| Prop    | Type     | Default | Description                            |
| ------- | -------- | ------- | -------------------------------------- |
| `value` | `number` | —       | Progress value as a percentage (0–100) |
