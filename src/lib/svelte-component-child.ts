import { MarkdownRenderChild } from 'obsidian';
import { ImperativeComponent } from 'svelte-imperative';
import type { Component } from 'svelte';

interface Options<Props> {
	props: Props;
	target: HTMLElement;
}

export class SvelteComponentChild<Props extends Record<string, any>> extends MarkdownRenderChild {
	private component: Component<Props>;
	private options: Options<Props>;

	private renderedComponent: ImperativeComponent<Props> | undefined;

	constructor(component: Component<Props>, options: Options<Props>) {
		super(options.target);

		this.component = component;
		this.options = options;
	}

	onload(): void {
		this.renderedComponent = new ImperativeComponent(
			this.options.target,
			this.component,
			this.options.props
		);
	}

	onunload(): void {
		this.renderedComponent?.destroy();
		this.renderedComponent = undefined;
	}

	/**
	 * Replaces all props with a new set of props.
	 *
	 * @param newProps — The new props object that will completely replace existing props
	 */
	setProps(newProps: Props) {
		this.renderedComponent?.setProps(newProps);
	}

	/**
	 * Updates a subset of props while preserving other prop values.
	 * 
 . * @param partialProps — Object containing only the props you want to update
	 */
	modifyProps(partialProps: Partial<Props>) {
		this.renderedComponent?.modifyProps(partialProps);
	}
}
