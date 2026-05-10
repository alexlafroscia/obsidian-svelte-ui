<script lang="ts">
	import { App } from 'obsidian';
	import { Text, SvelteInputSuggest, inputSuggest } from 'obsidian-svelte-ui';

	const ALL_SUGGESTIONS = ['Foo', 'Bar', 'Baz'] as const;

	type Suggestion = (typeof ALL_SUGGESTIONS)[number];

	interface Props {
		app: App;
	}

	let { app }: Props = $props();

	let textValue = $state<Suggestion>(ALL_SUGGESTIONS[0]);

	class SearchResultsProvider extends SvelteInputSuggest<Suggestion> {
		suggestionSnippet = suggestion;

		getSuggestions(query: string): Suggestion[] {
			return ALL_SUGGESTIONS.filter((result) =>
				result.toLowerCase().includes(query.toLowerCase())
			);
		}

		selectSuggestion(value: Suggestion) {
			textValue = value;
			this.close();
		}
	}
</script>

{#snippet suggestion(value: string)}
	<span class="suggestion">{value}</span>
{/snippet}

<Text
	value={textValue}
	placeholder="Enter a value"
	{@attach inputSuggest(app, SearchResultsProvider)}
/>

<p>Value: {textValue}</p>

<style>
	.suggestion {
		min-width: 100px;
	}
</style>
