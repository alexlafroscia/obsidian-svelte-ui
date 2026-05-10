# `inputSuggest` / `SvelteInputSuggest`

Wires up an Obsidian `AbstractInputSuggest` instance to a text input element as a Svelte attachment.

Two exports are provided:

- **`inputSuggest`** — a factory function that returns an `Attachment` for a pre-built suggest class.
- **`SvelteInputSuggest`** — an abstract base class that extends Obsidian's `AbstractInputSuggest` and renders suggestion items using a Svelte snippet.

They are designed to be used together: define a class that extends `SvelteInputSuggest`, then pass it to `inputSuggest` to attach it to an element.

```svelte
<script>
	import type { App } from 'obsidian';
	import { SvelteInputSuggest, inputSuggest, Text } from 'obsidian-svelte-ui';

	const ALL_SUGGESTIONS = ['Foo', 'Bar', 'Baz'];

	interface Props {
		app: App;
	}

	let { app }: Props = $props();
	let value = $state(ALL_SUGGESTIONS[0]);

	class MySuggest extends SvelteInputSuggest {
		suggestionSnippet = suggestion;

		getSuggestions(query) {
			return ALL_SUGGESTIONS.filter((s) => s.toLowerCase().includes(query.toLowerCase()));
		}

		selectSuggestion(selected) {
			value = selected;
			this.close();
		}
	}
</script>

{#snippet suggestion(value)}
	<span>{value}</span>
{/snippet}

<Text {value} {@attach inputSuggest(app, MySuggest)} />
```

## `inputSuggest`

### Signature

```ts
function inputSuggest(
	app: App,
	InputSuggest: InputSuggestConstructor
): Attachment<HTMLInputElement | HTMLDivElement>;
```

| Parameter      | Type                      | Description                                        |
| -------------- | ------------------------- | -------------------------------------------------- |
| `app`          | `App`                     | The Obsidian `App` instance                        |
| `InputSuggest` | `InputSuggestConstructor` | A class whose constructor accepts `(app, element)` |

The attachment calls `destroy()` on the suggest instance when the element is removed from the DOM, if the method is defined.

## `SvelteInputSuggest`

An abstract base class for suggest implementations that render items with a Svelte snippet instead of imperative DOM manipulation.

### Abstract members

| Member                         | Type                                                   | Description                                        |
| ------------------------------ | ------------------------------------------------------ | -------------------------------------------------- |
| `suggestionSnippet`            | `Snippet<[T]>`                                         | Svelte snippet used to render each suggestion item |
| `selectSuggestion(value, evt)` | `(value: T, evt: MouseEvent \| KeyboardEvent) => void` | Called when the user selects a suggestion          |

The `renderSuggestion` method is implemented for you — it mounts the snippet into the suggestion element provided by Obsidian.
