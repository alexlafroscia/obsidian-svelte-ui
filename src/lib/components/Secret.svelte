<script lang="ts">
	import { SecretComponent, type App } from 'obsidian';

	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import { bindMethodArgumentsToProps } from '$lib/utils/props-to-methods.svelte';

	type OnChangeCallback = Parameters<SecretComponent['onChange']>[0];

	interface Props {
		app: App;
		onChange?: OnChangeCallback;
		value?: string;
	}

	let { app, onChange, value }: Props = $props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new SecretComponent(app, containerEl);
		}
	});

	bindMethodArgumentsToProps(() => instance, {
		onChange: () => onChange,
		setValue: () => value
	});
</script>

<ExposeContainerElement bind:containerEl />
