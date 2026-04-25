<script lang="ts">
	interface Props {
		containerEl: HTMLElement | undefined | null;
	}

	let { containerEl = $bindable() }: Props = $props();

	let sentinel = $state<HTMLElement>();

	$effect(() => {
		containerEl = sentinel?.parentElement;
	});
</script>

<div style="display: none" bind:this={sentinel}></div>
