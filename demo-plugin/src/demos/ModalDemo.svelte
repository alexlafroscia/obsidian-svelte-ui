<script lang="ts">
	import { Button, Modal } from 'obsidian-svelte-ui';
	import type { App } from 'obsidian';

	interface Props {
		app: App;
	}

	let { app }: Props = $props();

	let isOpen = $state(false);
</script>

<Button
	onClick={() => {
		isOpen = true;
	}}>Open Modal</Button
>

<p>The Modal {isOpen ? 'is open' : 'is closed'}</p>

{#if isOpen}
	<Modal
		{app}
		title="Demo Modal"
		onClose={() => {
			isOpen = false;
		}}
	>
		<p>This is the modal content.</p>
	</Modal>
{/if}
