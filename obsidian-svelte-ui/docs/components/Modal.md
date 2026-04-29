# `Modal`

Wraps Obsidian's `Modal` class as a Svelte component. The modal opens when the component mounts and closes when it unmounts.

```svelte
<script>
	import { Modal } from 'obsidian-svelte-ui';

	let { app } = $props();
	let open = $state(true);
</script>

{#if open}
	<Modal {app} title="My Modal" onClose={() => (open = false)}>
		<p>Modal content goes here.</p>
	</Modal>
{/if}
```

## Props

| Prop       | Type         | Default  | Description                                 |
| ---------- | ------------ | -------- | ------------------------------------------- |
| `app`      | `App`        | required | The Obsidian `App` instance                 |
| `children` | `Snippet`    | —        | Content rendered inside the modal           |
| `title`    | `string`     | —        | Modal title                                 |
| `onClose`  | `() => void` | —        | Called when the modal is closed by the user |

Mount/unmount the component to open/close the modal — the idiomatic way is to wrap it in an `{#if}` block driven by a boolean state variable, and set that variable to `false` inside `onClose`.
