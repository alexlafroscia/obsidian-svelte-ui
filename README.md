# obsidian-svelte-ui

Svelte 5 components and utilities for building [Obsidian](https://obsidian.md) plugins.

## Installation

```sh
npm install obsidian-svelte-ui
# or
pnpm add obsidian-svelte-ui
```

Requires `obsidian ^1.12.3` and `svelte ^5.0.0` as peer dependencies.

## Components

### `Button`

Wraps Obsidian's `ButtonComponent` class as a Svelte component.

```svelte
<script>
	import { Button } from 'obsidian-svelte-ui';
</script>

<Button onClick={() => console.log('clicked')}>Click me</Button>
```

**Props**

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

---

### `Modal`

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

**Props**

| Prop       | Type         | Default  | Description                                 |
| ---------- | ------------ | -------- | ------------------------------------------- |
| `app`      | `App`        | required | The Obsidian `App` instance                 |
| `children` | `Snippet`    | —        | Content rendered inside the modal           |
| `title`    | `string`     | —        | Modal title                                 |
| `onClose`  | `() => void` | —        | Called when the modal is closed by the user |

---

## Attachments

Svelte 5 [attachments](https://svelte.dev/docs/svelte/svelte-attachments) are functions that can be applied to elements using the `{@attach ...}` directive.

### `setTooltip`

Attaches an Obsidian tooltip to an element using Obsidian's `setTooltip` API.

```svelte
<script>
	import { setTooltip } from 'obsidian-svelte-ui';
</script>

<button {@attach setTooltip('Save file', { placement: 'top' })}> Save </button>
```

**Signature**

```ts
function setTooltip(tooltip: string, options?: TooltipOptions): Attachment<HTMLElement>;
```

The tooltip is reactive — if `tooltip` or `options` changes, it will be updated automatically.

---

## `SvelteComponentChild`

A class for rendering a Svelte component inside an Obsidian view. Use this when registering a child component within a markdown post-processor, code block processor or some other case where you're attaching a Svelte component to the Obsidian UI.

```ts
import { SvelteComponentChild } from 'obsidian-svelte-ui';
import MyComponent from './MyComponent.svelte';

const child = new SvelteComponentChild(MyComponent, {
	target: containerEl,
	props: { message: 'Hello' }
});

view.addChild(child);
```

Obsidian manages its lifecycle automatically via the `addChild` call. The Svelte component is mounted in `onload` and destroyed in `onunload`.

**Constructor**

Constructor signature matches the Svelte 5 `mount` API:

```ts
new SvelteComponentChild(component: Component<Props>, options: { target: HTMLElement; props: Props })
```

**Methods**

| Method                                      | Description                                      |
| ------------------------------------------- | ------------------------------------------------ |
| `setProps(newProps: Props)`                 | Replaces all component props with a new set      |
| `modifyProps(partialProps: Partial<Props>)` | Updates a subset of props, preserving all others |

## AI Disclaimer

This package makes use of AI as part of it's development. I would _not_ call it vibe-coded, but Claude has been used to automate the process of generating the Svelte component wrappers once a good pattern for doing so was discovered.
