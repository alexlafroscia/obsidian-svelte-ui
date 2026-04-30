# `SvelteComponent`

A class for rendering a Svelte component inside an Obsidian view. Use this when registering a child component within a markdown post-processor, code block processor, or some other case where you're attaching a Svelte component to the Obsidian UI.

```ts
import { SvelteComponent } from 'obsidian-svelte-ui';
import MyComponent from './MyComponent.svelte';

const child = new SvelteComponent(MyComponent, {
	target: containerEl,
	props: { message: 'Hello' }
});

view.addChild(child);
```

Obsidian manages its lifecycle automatically via the `addChild` call. The Svelte component is mounted in `onload` and destroyed in `onunload`.

## Constructor

Constructor signature matches the Svelte 5 `mount` API:

```ts
new SvelteComponent(component: Component<Props>, options: { target: HTMLElement; props: Props })
```

## Methods

| Method                                      | Description                                      |
| ------------------------------------------- | ------------------------------------------------ |
| `setProps(newProps: Props)`                 | Replaces all component props with a new set      |
| `modifyProps(partialProps: Partial<Props>)` | Updates a subset of props, preserving all others |
