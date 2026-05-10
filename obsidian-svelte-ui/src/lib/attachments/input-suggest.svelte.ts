import { AbstractInputSuggest, type App } from 'obsidian';
import type { Component, ComponentProps, Snippet } from 'svelte';
import type { Attachment } from 'svelte/attachments';
import { ImperativeComponent } from 'svelte-imperative';

import InputSuggest from '../utils/InputSuggest.svelte';

type TextInputEl = HTMLInputElement | HTMLDivElement;

export abstract class SvelteInputSuggest<T> extends AbstractInputSuggest<T> {
	private ic?: ImperativeComponent<ComponentProps<InputSuggest<T>>>;

	abstract suggestionSnippet: Snippet<[T]>;

	renderSuggestion(value: T, el: HTMLElement): void {
		this.ic = new ImperativeComponent(
			el,
			InputSuggest as Component<{ suggestion: Snippet<[T]>; value: T }>,
			{
				suggestion: this.suggestionSnippet,
				value
			}
		);
	}

	destroy() {
		this.ic?.destroy();
	}
}

type InputSuggestConstructor = new (
	app: App,
	element: TextInputEl
) => {
	destroy?: () => void;
};

export function inputSuggestAttachment(
	app: App,
	InputSuggest: InputSuggestConstructor
): Attachment<HTMLInputElement | HTMLDivElement> {
	return (element) => {
		const inputSuggest = new InputSuggest(app, element);

		return () => {
			inputSuggest.destroy?.();
		};
	};
}
