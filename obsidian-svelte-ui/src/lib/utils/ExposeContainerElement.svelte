<script lang="ts">
	interface Props {
		containerEl: HTMLElement | undefined | null;
	}

	let { containerEl = $bindable() }: Props = $props();
</script>

<div class="obsidian-svelte-ui-mount-point" bind:this={containerEl}></div>

<style>
	.obsidian-svelte-ui-mount-point {
		display: contents;
	}
</style>
