<script lang="ts">
	import { Secret } from 'obsidian-svelte-ui';
	import type { App } from 'obsidian';

	interface Props {
		app: App;
	}

	let { app }: Props = $props();

	let secretValue = $state<string | null>('');
	let normalizedSecretValue = $derived(secretValue ?? '');
</script>

<Secret
	{app}
	value={normalizedSecretValue}
	onChange={(value) => {
		secretValue = value;
	}}
/>

<p>Length: {normalizedSecretValue.length} characters</p>
